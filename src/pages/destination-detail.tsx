import { useParams, Link } from 'react-router-dom';
import { MapPin, Layers, Globe, Sparkles, ArrowLeft, Sun } from 'lucide-react';
import { SEO } from '@/components/seo';
import { PageHero } from '@/components/page-hero';
import { SectionHeader } from '@/components/section-header';
import { CTASection } from '@/components/cta-section';
import { LazyImage } from '@/components/lazy-image';
import { Reveal } from '@/components/reveal';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { destinations } from '@/data/armenia';

export default function DestinationDetail() {
  const { slug } = useParams<{ slug: string }>();
  const dest = destinations.find((d) => d.slug === slug);

  if (!dest) {
    return (
      <>
        <SEO title="Չգտնվեց" description="Հայցվող էջը գոյություն չունի:" path="/404" />
        <section className="flex min-h-[60vh] items-center justify-center px-6">
          <div className="text-center">
            <h1 className="font-display text-3xl font-bold">Էջը գոյություն չունի</h1>
            <p className="mt-4 text-muted-foreground">Հայցվող ուղղությունը չի գտնվել։</p>
            <Button asChild className="mt-6">
              <Link to="/destinations">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Վերադառնալ ուղղություններին
              </Link>
            </Button>
          </div>
        </section>
      </>
    );
  }

  const gallery = dest.gallery ?? [dest.image];
  const facts = dest.interestingFacts ?? [];

  return (
    <>
      <SEO
        title={dest.name}
        description={dest.shortDesc}
        path={`/destinations/${dest.slug}`}
        image={dest.image}
      />

      <PageHero
        eyebrow={dest.region}
        title={dest.name}
        description={dest.shortDesc}
        image={dest.image}
      />

      {/* Location info bar */}
      <section className="border-b border-border bg-card/50">
        <div className="mx-auto max-w-7xl px-6 py-6">
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" />
              <span className="text-sm text-muted-foreground">Վայր՝</span>
              <span className="text-sm font-semibold">{dest.location?.place ?? dest.name}</span>
            </div>
            <div className="flex items-center gap-2">
              <Layers className="h-4 w-4 text-primary" />
              <span className="text-sm text-muted-foreground">Մարզ՝</span>
              <span className="text-sm font-semibold">{dest.location?.region ?? dest.region}</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="h-4 w-4 text-primary" />
              <span className="text-sm text-muted-foreground">Երկիր՝</span>
              <span className="text-sm font-semibold">{dest.location?.country ?? 'Հայաստան'}</span>
            </div>
            <div className="flex items-center gap-2">
              <Sun className="h-4 w-4 text-primary" />
              <span className="text-sm text-muted-foreground">Լավագույն ժամանակ՝</span>
              <span className="text-sm font-semibold">{dest.bestTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6">
          <SectionHeader
            eyebrow="Նկարագրություն"
            title={`${dest.name}ի մասին`}
            description=""
            align="left"
          />
          <Reveal className="mt-8">
            <p className="text-base leading-loose text-muted-foreground md:text-lg">
              {dest.longDescription ?? dest.description}
            </p>
          </Reveal>

          <div className="mt-8 flex flex-wrap gap-2">
            {dest.facts.map((fact, i) => (
              <Badge key={i} variant="secondary" className="text-xs">
                {fact.label}: {fact.value}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Image gallery */}
      {gallery.length > 0 && (
        <section className="bg-muted/30 py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-6">
            <SectionHeader
              eyebrow="Պատկերասրահ"
              title="Տեսնելու արժանի տեսարաններ"
              description="Բացահայտեք վայրի գեղեցկությունը պատկերների միջոցով։"
            />
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {gallery.map((img, i) => (
                <Reveal
                  key={i}
                  variant="scale"
                  delay={i * 80}
                  className={
                    i === 0
                      ? 'group relative overflow-hidden rounded-xl border border-border shadow-soft card-hover sm:col-span-2 lg:col-span-2 lg:row-span-2'
                      : 'group relative overflow-hidden rounded-xl border border-border shadow-soft card-hover'
                  }
                >
                  <LazyImage
                    src={img}
                    alt={`${dest.name} — պատկեր ${i + 1}`}
                    aspectRatio={i === 0 ? 'aspect-[16/9] lg:aspect-[16/10]' : 'aspect-[4/3]'}
                    imgClassName="group-hover:scale-105 transition-transform duration-700 ease-smooth"
                  />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Interesting facts */}
      {facts.length > 0 && (
        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-5xl px-6">
            <SectionHeader
              eyebrow="Հետաքրքիր փաստեր"
              title="Իմացեք ավելին"
              description="Արժեքավոր տեղեկություններ այս վայրի մասին։"
            />
            <div className="mt-12 grid gap-5 md:grid-cols-2">
              {facts.map((fact, i) => (
                <Reveal
                  key={i}
                  delay={i * 80}
                  className="flex gap-4 rounded-xl border border-border bg-card p-6 shadow-soft"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">{fact}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Location info */}
      <section className="bg-muted/30 py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6">
          <SectionHeader
            eyebrow="Տեղադրություն"
            title="Որտեղ գտնվում է"
            description="Կոորդինատներ և հասցեական տեղեկություն։"
          />
          <Reveal className="mt-12 overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
            <div className="grid md:grid-cols-2">
              <div className="p-8 md:p-10">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Վայր</p>
                      <p className="mt-1 font-display text-lg font-semibold">{dest.location?.place ?? dest.name}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Layers className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Մարզ</p>
                      <p className="mt-1 font-display text-lg font-semibold">{dest.location?.region ?? dest.region}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Globe className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Երկիր</p>
                      <p className="mt-1 font-display text-lg font-semibold">{dest.location?.country ?? 'Հայաստան'}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative min-h-[300px] overflow-hidden border-t border-border md:border-l md:border-t-0">
                <LazyImage
                  src={dest.image}
                  alt={`${dest.name} — տեղադրություն`}
                  aspectRatio="aspect-auto md:aspect-auto"
                  className="h-full"
                  imgClassName="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection
        title="Ուզում ե՞ք այցելել"
        description="Պլանավորեք ձեր ճանապարհորդությունը դեպի այս գեղեցիկ վայր։"
        buttonText="Դիտել բոլոր ուղղությունները"
        buttonTo="/destinations"
      >
        <Button asChild variant="outline" size="lg">
          <Link to="/regions">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Դիտել մարզերը
          </Link>
        </Button>
      </CTASection>
    </>
  );
}
