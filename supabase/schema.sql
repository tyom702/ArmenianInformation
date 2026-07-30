/*
# Armenian Information Web App — Core Database Schema

## Overview
Production schema for an Armenian regional/village information platform:
user profiles, regions (marzes), villages, sights, news, gallery, favorites,
comments, and contact messages. Includes indexes, constraints, Row Level
Security, an admin helper, updated_at automation, and storage buckets.

## 1. Tables
- profiles        — user profile linked to auth.users; role admin/moderator/user.
- marzes          — Armenian regions (provinces).
- villages        — villages in a marz, with geo + stats columns.
- sights          — points of interest in a village.
- news            — news articles authored by a profile, with published flag.
- gallery         — village photo gallery entries.
- favorites       — user bookmarks for villages (unique per user+village).
- comments        — user comments on villages.
- contact_messages— submissions from the public contact form.

## 2. Constraints
- Primary keys (uuid, gen_random_uuid()) on every table.
- Foreign keys with CASCADE deletes for child relationships
  (villages->marzes, sights->villages, gallery->villages, comments->villages,
  favorites->villages, profiles->auth.users). SET NULL for news.author_id.
- UNIQUE slug on marzes, villages, news.
- UNIQUE (user_id, village_id) on favorites.
- NOT NULL on required columns.
- CHECK: profiles.role in (admin, moderator, user);
  village/sights latitude -90..90, longitude -180..180;
  non-negative population/area/elevation; contact_messages.email basic format.

## 3. Indexes
- slug (via UNIQUE constraints), marz_id, village_id, user_id, author_id,
  published, created_at on relevant tables.

## 4. Security (RLS)
- RLS enabled on all tables.
- Public (anon + authenticated) read: marzes, villages, sights, gallery,
  news (published rows), comments, profiles.
- Authenticated users manage their own: favorites, comments, profiles.
- Admins (profiles.role = 'admin') have full access to all tables.
- Only admins can insert/update/delete marzes, villages, sights, gallery, news.
- contact_messages: anyone may insert; only admins read/update/delete.
- Helper: is_admin() SECURITY DEFINER function checks the current user's role.

## 5. Functions / Triggers
- handle_updated_at() sets NEW.updated_at = now() on UPDATE.
- Triggers on profiles, villages, news, comments.

## 6. Storage
- Public buckets: avatars, marzes, villages, gallery, news.
- Public read on all buckets.
- avatars: authenticated users manage their own files (owner = auth.uid()).
- marzes/villages/gallery/news: only admins upload/update/delete.

## Notes
1. Idempotent: uses IF NOT EXISTS / OR REPLACE / DROP POLICY IF EXISTS.
2. Owner columns (favorites.user_id, comments.user_id) default to auth.uid().
3. Safe to re-run.
*/

-- ============================================================================
-- HELPER FUNCTION (no table dependency)
-- ============================================================================

create or replace function public.handle_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

-- ============================================================================
-- TABLES
-- ============================================================================

create table if not exists public.profiles (
  id          uuid primary key references auth.users(id) on delete cascade,
  first_name  text,
  last_name   text,
  avatar      text,
  role        text not null default 'user' check (role in ('admin','moderator','user')),
  created_at  timestamptz not null default now(),
  updated_at  timestamptz not null default now()
);

create table if not exists public.marzes (
  id          uuid primary key default gen_random_uuid(),
  name        text not null,
  slug        text not null unique,
  image       text,
  description text,
  created_at  timestamptz not null default now()
);

create table if not exists public.villages (
  id          uuid primary key default gen_random_uuid(),
  marz_id     uuid not null references public.marzes(id) on delete cascade,
  name        text not null,
  slug        text not null unique,
  image       text,
  population  integer check (population is null or population >= 0),
  area        numeric(10,2) check (area is null or area >= 0),
  elevation   integer check (elevation is null or elevation >= 0),
  founded     integer,
  latitude    numeric(9,6) check (latitude is null or latitude between -90 and 90),
  longitude   numeric(9,6) check (longitude is null or longitude between -180 and 180),
  description text,
  created_at  timestamptz not null default now(),
  updated_at  timestamptz not null default now()
);

create table if not exists public.sights (
  id          uuid primary key default gen_random_uuid(),
  village_id  uuid not null references public.villages(id) on delete cascade,
  title       text not null,
  description text,
  image       text,
  latitude    numeric(9,6) check (latitude is null or latitude between -90 and 90),
  longitude   numeric(9,6) check (longitude is null or longitude between -180 and 180),
  category    text,
  created_at  timestamptz not null default now()
);

create table if not exists public.news (
  id          uuid primary key default gen_random_uuid(),
  title       text not null,
  slug        text not null unique,
  content     text,
  image       text,
  author_id   uuid default auth.uid() references public.profiles(id) on delete set null,
  published   boolean not null default false,
  created_at  timestamptz not null default now(),
  updated_at  timestamptz not null default now()
);

create table if not exists public.gallery (
  id          uuid primary key default gen_random_uuid(),
  village_id  uuid not null references public.villages(id) on delete cascade,
  image       text not null,
  caption     text,
  created_at  timestamptz not null default now()
);

create table if not exists public.favorites (
  id          uuid primary key default gen_random_uuid(),
  user_id     uuid not null default auth.uid() references public.profiles(id) on delete cascade,
  village_id  uuid not null references public.villages(id) on delete cascade,
  created_at  timestamptz not null default now(),
  unique (user_id, village_id)
);

create table if not exists public.comments (
  id          uuid primary key default gen_random_uuid(),
  village_id  uuid not null references public.villages(id) on delete cascade,
  user_id     uuid not null default auth.uid() references public.profiles(id) on delete cascade,
  content     text not null,
  created_at  timestamptz not null default now(),
  updated_at  timestamptz not null default now()
);

create table if not exists public.contact_messages (
  id          uuid primary key default gen_random_uuid(),
  full_name   text not null,
  email       text not null check (email ~ '@'),
  subject     text,
  message     text not null,
  created_at  timestamptz not null default now()
);

-- ============================================================================
-- ADMIN HELPER FUNCTION (depends on profiles table existing)
-- ============================================================================

create or replace function public.is_admin()
returns boolean
language sql
security definer
stable
set search_path = public
as $$
  select exists (
    select 1 from public.profiles
    where id = auth.uid() and role = 'admin'
  );
$$;

-- ============================================================================
-- INDEXES
-- ============================================================================

create index if not exists idx_villages_marz_id on public.villages (marz_id);
create index if not exists idx_sights_village_id on public.sights (village_id);
create index if not exists idx_gallery_village_id on public.gallery (village_id);
create index if not exists idx_news_author_id on public.news (author_id);
create index if not exists idx_news_published on public.news (published);
create index if not exists idx_news_created_at on public.news (created_at);
create index if not exists idx_favorites_user_id on public.favorites (user_id);
create index if not exists idx_favorites_village_id on public.favorites (village_id);
create index if not exists idx_comments_village_id on public.comments (village_id);
create index if not exists idx_comments_user_id on public.comments (user_id);
create index if not exists idx_comments_created_at on public.comments (created_at);
create index if not exists idx_marzes_created_at on public.marzes (created_at);
create index if not exists idx_villages_created_at on public.villages (created_at);
create index if not exists idx_sights_created_at on public.sights (created_at);
create index if not exists idx_gallery_created_at on public.gallery (created_at);
create index if not exists idx_favorites_created_at on public.favorites (created_at);
create index if not exists idx_contact_messages_created_at on public.contact_messages (created_at);
create index if not exists idx_profiles_created_at on public.profiles (created_at);

-- ============================================================================
-- TRIGGERS (updated_at)
-- ============================================================================

do $$
begin
  if not exists (select 1 from pg_trigger where tgname = 'trg_profiles_updated_at') then
    create trigger trg_profiles_updated_at before update on public.profiles
      for each row execute function public.handle_updated_at();
  end if;
  if not exists (select 1 from pg_trigger where tgname = 'trg_villages_updated_at') then
    create trigger trg_villages_updated_at before update on public.villages
      for each row execute function public.handle_updated_at();
  end if;
  if not exists (select 1 from pg_trigger where tgname = 'trg_news_updated_at') then
    create trigger trg_news_updated_at before update on public.news
      for each row execute function public.handle_updated_at();
  end if;
  if not exists (select 1 from pg_trigger where tgname = 'trg_comments_updated_at') then
    create trigger trg_comments_updated_at before update on public.comments
      for each row execute function public.handle_updated_at();
  end if;
end $$;

-- ============================================================================
-- ROW LEVEL SECURITY
-- ============================================================================

alter table public.profiles enable row level security;
alter table public.marzes enable row level security;
alter table public.villages enable row level security;
alter table public.sights enable row level security;
alter table public.news enable row level security;
alter table public.gallery enable row level security;
alter table public.favorites enable row level security;
alter table public.comments enable row level security;
alter table public.contact_messages enable row level security;

-- ----- profiles -----
drop policy if exists "profiles_select_public" on public.profiles;
create policy "profiles_select_public" on public.profiles for select
  to anon, authenticated using (true);

drop policy if exists "profiles_insert_self_or_admin" on public.profiles;
create policy "profiles_insert_self_or_admin" on public.profiles for insert
  to authenticated with check (auth.uid() = id or public.is_admin());

drop policy if exists "profiles_update_self_or_admin" on public.profiles;
create policy "profiles_update_self_or_admin" on public.profiles for update
  to authenticated using (auth.uid() = id or public.is_admin())
  with check (auth.uid() = id or public.is_admin());

drop policy if exists "profiles_delete_admin" on public.profiles;
create policy "profiles_delete_admin" on public.profiles for delete
  to authenticated using (public.is_admin());

-- ----- marzes -----
drop policy if exists "marzes_select_public" on public.marzes;
create policy "marzes_select_public" on public.marzes for select
  to anon, authenticated using (true);

drop policy if exists "marzes_insert_admin" on public.marzes;
create policy "marzes_insert_admin" on public.marzes for insert
  to authenticated with check (public.is_admin());

drop policy if exists "marzes_update_admin" on public.marzes;
create policy "marzes_update_admin" on public.marzes for update
  to authenticated using (public.is_admin()) with check (public.is_admin());

drop policy if exists "marzes_delete_admin" on public.marzes;
create policy "marzes_delete_admin" on public.marzes for delete
  to authenticated using (public.is_admin());

-- ----- villages -----
drop policy if exists "villages_select_public" on public.villages;
create policy "villages_select_public" on public.villages for select
  to anon, authenticated using (true);

drop policy if exists "villages_insert_admin" on public.villages;
create policy "villages_insert_admin" on public.villages for insert
  to authenticated with check (public.is_admin());

drop policy if exists "villages_update_admin" on public.villages;
create policy "villages_update_admin" on public.villages for update
  to authenticated using (public.is_admin()) with check (public.is_admin());

drop policy if exists "villages_delete_admin" on public.villages;
create policy "villages_delete_admin" on public.villages for delete
  to authenticated using (public.is_admin());

-- ----- sights -----
drop policy if exists "sights_select_public" on public.sights;
create policy "sights_select_public" on public.sights for select
  to anon, authenticated using (true);

drop policy if exists "sights_insert_admin" on public.sights;
create policy "sights_insert_admin" on public.sights for insert
  to authenticated with check (public.is_admin());

drop policy if exists "sights_update_admin" on public.sights;
create policy "sights_update_admin" on public.sights for update
  to authenticated using (public.is_admin()) with check (public.is_admin());

drop policy if exists "sights_delete_admin" on public.sights;
create policy "sights_delete_admin" on public.sights for delete
  to authenticated using (public.is_admin());

-- ----- news -----
drop policy if exists "news_select_public" on public.news;
create policy "news_select_public" on public.news for select
  to anon, authenticated using (published = true or public.is_admin());

drop policy if exists "news_insert_admin" on public.news;
create policy "news_insert_admin" on public.news for insert
  to authenticated with check (public.is_admin());

drop policy if exists "news_update_admin" on public.news;
create policy "news_update_admin" on public.news for update
  to authenticated using (public.is_admin()) with check (public.is_admin());

drop policy if exists "news_delete_admin" on public.news;
create policy "news_delete_admin" on public.news for delete
  to authenticated using (public.is_admin());

-- ----- gallery -----
drop policy if exists "gallery_select_public" on public.gallery;
create policy "gallery_select_public" on public.gallery for select
  to anon, authenticated using (true);

drop policy if exists "gallery_insert_admin" on public.gallery;
create policy "gallery_insert_admin" on public.gallery for insert
  to authenticated with check (public.is_admin());

drop policy if exists "gallery_update_admin" on public.gallery;
create policy "gallery_update_admin" on public.gallery for update
  to authenticated using (public.is_admin()) with check (public.is_admin());

drop policy if exists "gallery_delete_admin" on public.gallery;
create policy "gallery_delete_admin" on public.gallery for delete
  to authenticated using (public.is_admin());

-- ----- favorites -----
drop policy if exists "favorites_select_own" on public.favorites;
create policy "favorites_select_own" on public.favorites for select
  to authenticated using (auth.uid() = user_id or public.is_admin());

drop policy if exists "favorites_insert_own" on public.favorites;
create policy "favorites_insert_own" on public.favorites for insert
  to authenticated with check (auth.uid() = user_id or public.is_admin());

drop policy if exists "favorites_delete_own" on public.favorites;
create policy "favorites_delete_own" on public.favorites for delete
  to authenticated using (auth.uid() = user_id or public.is_admin());

-- ----- comments -----
drop policy if exists "comments_select_public" on public.comments;
create policy "comments_select_public" on public.comments for select
  to anon, authenticated using (true);

drop policy if exists "comments_insert_own" on public.comments;
create policy "comments_insert_own" on public.comments for insert
  to authenticated with check (auth.uid() = user_id or public.is_admin());

drop policy if exists "comments_update_own" on public.comments;
create policy "comments_update_own" on public.comments for update
  to authenticated using (auth.uid() = user_id or public.is_admin())
  with check (auth.uid() = user_id or public.is_admin());

drop policy if exists "comments_delete_own" on public.comments;
create policy "comments_delete_own" on public.comments for delete
  to authenticated using (auth.uid() = user_id or public.is_admin());

-- ----- contact_messages -----
drop policy if exists "contact_messages_insert_public" on public.contact_messages;
create policy "contact_messages_insert_public" on public.contact_messages for insert
  to anon, authenticated with check (true);

drop policy if exists "contact_messages_select_admin" on public.contact_messages;
create policy "contact_messages_select_admin" on public.contact_messages for select
  to authenticated using (public.is_admin());

drop policy if exists "contact_messages_update_admin" on public.contact_messages;
create policy "contact_messages_update_admin" on public.contact_messages for update
  to authenticated using (public.is_admin()) with check (public.is_admin());

drop policy if exists "contact_messages_delete_admin" on public.contact_messages;
create policy "contact_messages_delete_admin" on public.contact_messages for delete
  to authenticated using (public.is_admin());

-- ============================================================================
-- STORAGE BUCKETS
-- ============================================================================

insert into storage.buckets (id, name, public)
values
  ('avatars','avatars',true),
  ('marzes','marzes',true),
  ('villages','villages',true),
  ('gallery','gallery',true),
  ('news','news',true)
on conflict (id) do nothing;

-- ============================================================================
-- STORAGE POLICIES (storage.objects)
-- ============================================================================

-- avatars: public read, owner-managed write
drop policy if exists "avatars_select_public" on storage.objects;
create policy "avatars_select_public" on storage.objects for select
  to anon, authenticated using (bucket_id = 'avatars');

drop policy if exists "avatars_insert_owner" on storage.objects;
create policy "avatars_insert_owner" on storage.objects for insert
  to authenticated with check (bucket_id = 'avatars' and auth.uid() = owner);

drop policy if exists "avatars_update_owner" on storage.objects;
create policy "avatars_update_owner" on storage.objects for update
  to authenticated using (bucket_id = 'avatars' and auth.uid() = owner)
  with check (bucket_id = 'avatars' and auth.uid() = owner);

drop policy if exists "avatars_delete_owner" on storage.objects;
create policy "avatars_delete_owner" on storage.objects for delete
  to authenticated using (bucket_id = 'avatars' and auth.uid() = owner);

-- marzes: public read, admin write
drop policy if exists "marzes_select_public" on storage.objects;
create policy "marzes_select_public" on storage.objects for select
  to anon, authenticated using (bucket_id = 'marzes');

drop policy if exists "marzes_insert_admin" on storage.objects;
create policy "marzes_insert_admin" on storage.objects for insert
  to authenticated with check (bucket_id = 'marzes' and public.is_admin());

drop policy if exists "marzes_update_admin" on storage.objects;
create policy "marzes_update_admin" on storage.objects for update
  to authenticated using (bucket_id = 'marzes' and public.is_admin())
  with check (bucket_id = 'marzes' and public.is_admin());

drop policy if exists "marzes_delete_admin" on storage.objects;
create policy "marzes_delete_admin" on storage.objects for delete
  to authenticated using (bucket_id = 'marzes' and public.is_admin());

-- villages: public read, admin write
drop policy if exists "villages_select_public" on storage.objects;
create policy "villages_select_public" on storage.objects for select
  to anon, authenticated using (bucket_id = 'villages');

drop policy if exists "villages_insert_admin" on storage.objects;
create policy "villages_insert_admin" on storage.objects for insert
  to authenticated with check (bucket_id = 'villages' and public.is_admin());

drop policy if exists "villages_update_admin" on storage.objects;
create policy "villages_update_admin" on storage.objects for update
  to authenticated using (bucket_id = 'villages' and public.is_admin())
  with check (bucket_id = 'villages' and public.is_admin());

drop policy if exists "villages_delete_admin" on storage.objects;
create policy "villages_delete_admin" on storage.objects for delete
  to authenticated using (bucket_id = 'villages' and public.is_admin());

-- gallery: public read, admin write
drop policy if exists "gallery_select_public" on storage.objects;
create policy "gallery_select_public" on storage.objects for select
  to anon, authenticated using (bucket_id = 'gallery');

drop policy if exists "gallery_insert_admin" on storage.objects;
create policy "gallery_insert_admin" on storage.objects for insert
  to authenticated with check (bucket_id = 'gallery' and public.is_admin());

drop policy if exists "gallery_update_admin" on storage.objects;
create policy "gallery_update_admin" on storage.objects for update
  to authenticated using (bucket_id = 'gallery' and public.is_admin())
  with check (bucket_id = 'gallery' and public.is_admin());

drop policy if exists "gallery_delete_admin" on storage.objects;
create policy "gallery_delete_admin" on storage.objects for delete
  to authenticated using (bucket_id = 'gallery' and public.is_admin());

-- news: public read, admin write
drop policy if exists "news_select_public" on storage.objects;
create policy "news_select_public" on storage.objects for select
  to anon, authenticated using (bucket_id = 'news');

drop policy if exists "news_insert_admin" on storage.objects;
create policy "news_insert_admin" on storage.objects for insert
  to authenticated with check (bucket_id = 'news' and public.is_admin());

drop policy if exists "news_update_admin" on storage.objects;
create policy "news_update_admin" on storage.objects for update
  to authenticated using (bucket_id = 'news' and public.is_admin())
  with check (bucket_id = 'news' and public.is_admin());

drop policy if exists "news_delete_admin" on storage.objects;
create policy "news_delete_admin" on storage.objects for delete
  to authenticated using (bucket_id = 'news' and public.is_admin());
