import { SEO } from '@/components/seo';
import { PageHero } from '@/components/page-hero';
import { SectionHeader } from '@/components/section-header';
import { CTASection } from '@/components/cta-section';
import { RegionCard } from '@/components/region-card';
import { regions } from '@/data/armenia';

export default function Regions() {
  return (
    <>
      <SEO title="Մարզեր" description="Հայաստանի 11 մարզերը՝ յուրաքանչյուրն իր յուրահատուկ բնույթով, պատմությամբ և գանձերով։" path="/regions" />

      <PageHero
        eyebrow="Աշխարհագրություն"
        title="Հայաստանի մարզերը"
        description="Երկրի 11 մարզերը՝ յուրաքանչյուրն իր յուրահատուկ բնույթով, պատմությամբ և գանձերով։ Բացահայտեք դրանք բոլորը։"
        image="https://images.pexels.com/photos/32447084/pexels-photo-32447084.jpeg"
      />

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader eyebrow="Բոլոր մարզերը" title="Ծանոթացեք յուրաքանչյուր մարզին" description="Ընտրեք ձեզ հետաքրքրող մարզը՝ իմանալու համար ավելին այն ուղղությունների մասին։" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {regions.map((region) => (
              <RegionCard key={region.slug} region={region} />
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Պատրաստ ե՞ք ճանապարհորդել" description="Ընտրեք ձեր հաջորդ ուղղությունը և սկսեք արկածը հենց հիմա։" buttonText="Դիտել ուղղությունները" buttonTo="/destinations" />
    </>
  );
}
