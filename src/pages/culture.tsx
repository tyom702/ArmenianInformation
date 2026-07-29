import { SEO } from '@/components/seo';
import { PageHero } from '@/components/page-hero';
import { SectionHeader } from '@/components/section-header';
import { CTASection } from '@/components/cta-section';
import { Reveal } from '@/components/reveal';
import { LazyImage } from '@/components/lazy-image';
import { Badge } from '@/components/ui/badge';
import { cultureCards, nationalSymbols } from '@/data/armenia';

export default function Culture() {
  return (
    <>
      <SEO title="Մշակույթ" description="Հայ ժողովրդի հարուստ մշակութային ժառանգությունը՝ խաչքարներ, գորգագործություն, երաժշտություն, գրականություն և պարարվեստ։" path="/culture" />

      <PageHero
        eyebrow="Մշակույթ"
        title="Մշակույթ և ավանդույթներ"
        description="Հայ ժողովրդի հարուստ մշակութային ժառանգությունը՝ հազարամյակների ավանդույթներով ստեղծված և սերնդեսերունդ փոխանցված։"
        image="https://images.pexels.com/photos/32281166/pexels-photo-32281166.jpeg"
      />

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader eyebrow="Ավանդույթներ" title="Հայ մշակույթի դեմքերը" description="Հայ ժողովրդի մշակութային ժառանգության ամենակարևոր բաղադրիչները։" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {cultureCards.map((card, i) => (
              <Reveal key={i} delay={i * 80} variant="scale">
                <div className="group h-full overflow-hidden rounded-xl border border-border bg-card shadow-soft card-hover">
                  <div className="relative overflow-hidden">
                    <LazyImage src={card.image} alt={card.title} aspectRatio="aspect-[16/10]" imgClassName="group-hover:scale-105 transition-transform duration-700 ease-smooth" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-3 left-3 flex gap-2">
                      <Badge className="bg-background/90 text-foreground backdrop-blur-sm">{card.category}</Badge>
                    </div>
                  </div>
                  <div className="p-5">
                    <span className="text-xs font-medium text-primary">{card.year}</span>
                    <h3 className="mt-1 font-display text-lg font-bold leading-tight">{card.title}</h3>
                    <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted-foreground">{card.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-hero py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader eyebrow="Խորհրդանիշներ" title="Հայաստանի խորհրդանիշները" description="Այն, ինչ խորհրդանշում է հայ ժողովրդի ինքնությունը և ոգին։" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {nationalSymbols.map((symbol, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="group flex h-full gap-4 rounded-xl border border-border bg-card p-5 shadow-soft card-hover">
                  <div className="shrink-0 overflow-hidden rounded-lg">
                    <LazyImage src={symbol.image} alt={symbol.name} aspectRatio="aspect-square w-24" imgClassName="group-hover:scale-105 transition-transform duration-700 ease-smooth" />
                  </div>
                  <div className="flex-1">
                    <Badge variant="secondary" className="mb-2 text-[10px]">{symbol.category}</Badge>
                    <h3 className="font-display text-base font-bold leading-tight">{symbol.name}</h3>
                    <p className="mt-1 line-clamp-3 text-sm leading-relaxed text-muted-foreground">{symbol.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Իմացեք ավելին" description="Հայաստանի պատմության հազարամյակները սպասում են ձեզ բացահայտման։" buttonText="Դիտել պատմությունը" buttonTo="/history" />
    </>
  );
}
