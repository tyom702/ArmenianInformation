import { SEO } from '@/components/seo';
import { PageHero } from '@/components/page-hero';
import { SectionHeader } from '@/components/section-header';
import { CTASection } from '@/components/cta-section';
import { Reveal } from '@/components/reveal';
import { LazyImage } from '@/components/lazy-image';
import { Badge } from '@/components/ui/badge';
import { dishes } from '@/data/armenia';

export default function Cuisine() {
  return (
    <>
      <SEO title="Խոհանոց" description="Հայկական ավանդական խոհանոց՝ համեղ ուտեստներ, աշխարհի ամենահին գինի և հազարամյակների ավանդույթներ։" path="/cuisine" />

      <PageHero
        eyebrow="Խոհանոց"
        title="Հայկական խոհանոց"
        description="Հայկական խոհանոցը հազարամյակների ավանդույթների արդյունք է՝ հարուստ համերով և բաղադրատոմսերով, որոնք սերունդներ շարունակ են փոխանցվել։"
        image="https://images.pexels.com/photos/6089620/pexels-photo-6089620.jpeg"
      />

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader eyebrow="Ուտեստներ" title="Ավանդական հայկական ուտեստներ" description="Հայկական խոհանոցի ամենաճանաչված ուտեստները, որոնք արժե փորձել Հայաստան այցելելիս։" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {dishes.map((dish, i) => (
              <Reveal key={i} delay={i * 60} variant="scale">
                <div className="group h-full overflow-hidden rounded-xl border border-border bg-card shadow-soft card-hover">
                  <div className="relative overflow-hidden">
                    <LazyImage src={dish.image} alt={dish.name} aspectRatio="aspect-[4/3]" imgClassName="group-hover:scale-105 transition-transform duration-700 ease-smooth" />
                    <div className="absolute left-3 top-3">
                      <Badge className="bg-background/90 text-foreground backdrop-blur-sm">{dish.type}</Badge>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-lg font-bold leading-tight">{dish.name}</h3>
                    <p className="mt-1 text-xs font-medium text-primary">{dish.origin}</p>
                    <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted-foreground">{dish.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-hero py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6">
          <Reveal className="text-center">
            <Badge className="mb-4">6100 տարվա ավանդույթ</Badge>
            <h2 className="font-display text-3xl font-bold leading-tight tracking-tight md:text-4xl lg:text-[2.75rem]">Գինու երկիր</h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Հայաստանը գինեգործության օրրան է։ Արենիի քարանձավում հայտնաբերվել են աշխարհի ամենահին գինեգործարանի մնացորդները՝ 6100 տարվա հնությամբ։ Հայկական գինին և կոնյակը հայտնի են ողջ աշխարհում իրենց նուրբ համով։
            </p>
          </Reveal>
        </div>
      </section>

      <CTASection title="Լավագույնս կիսված" description="Հայկական խոհանոցը սիրով է կիսվում հյուրերի հետ։ Եկեք և փորձեք ինքներդ ձեզ։" buttonText="Պլանավորել այցը" buttonTo="/contact" />
    </>
  );
}
