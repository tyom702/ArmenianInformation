import { SEO } from '@/components/seo';
import { PageHero } from '@/components/page-hero';
import { SectionHeader } from '@/components/section-header';
import { CTASection } from '@/components/cta-section';
import { Reveal } from '@/components/reveal';
import { historyEvents, timeline } from '@/data/armenia';
import { cn } from '@/lib/utils';

const significanceConfig = {
  foundational: { label: 'Հիմնարար', color: 'bg-blue-500/10 text-blue-600 dark:text-blue-400' },
  golden: { label: 'Ոսկեդար', color: 'bg-amber-500/10 text-amber-600 dark:text-amber-400' },
  tragedy: { label: 'Ողբերգություն', color: 'bg-red-500/10 text-red-600 dark:text-red-400' },
  revival: { label: 'Վերածնունդ', color: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400' },
};

export default function History() {
  return (
    <>
      <SEO title="Պատմություն" description="Հայ ժողովրդի հազարամյակների պատմություն՝ Հայկ Նահապետից մինչև ժամանակակից անկախ Հայաստան։" path="/history" />

      <PageHero
        eyebrow="Պատմություն"
        title="Հայաստանի պատմությունը"
        description="Հազարամյակների ընթացքում հայ ժողովուրդը ստեղծել է հարուստ պատմություն՝ լի վեհերով և ողբերգություններով, վերածնունդներով և հաղթանակներով։"
        image="https://images.pexels.com/photos/36096818/pexels-photo-36096818.jpeg"
      />

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6">
          <SectionHeader eyebrow="Ժամանակագրություն" title="Հիմնական դեպքեր" description="Հայ ժողովրդի պատմության ամենակարևոր դեպքերը ժամանակագրական կարգով։" />
          <div className="mt-16 relative">
            <div className="absolute left-4 top-0 h-full w-px bg-border md:left-1/2" />
            {historyEvents.map((event, i) => {
              const config = significanceConfig[event.significance];
              const isLeft = i % 2 === 0;
              return (
                <Reveal key={i} delay={i * 50}>
                  <div className={cn('relative mb-12 flex gap-8', isLeft ? 'md:flex-row-reverse' : '')}>
                    <div className="hidden md:block md:w-1/2" />
                    <div className="absolute left-4 top-1.5 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-primary bg-background md:left-1/2" />
                    <div className="ml-12 flex-1 md:ml-0 md:w-1/2 md:px-8">
                      <div className="rounded-xl border border-border bg-card p-5 shadow-soft card-hover">
                        <div className="flex items-center gap-2">
                          <span className="font-display text-lg font-bold text-primary">{event.year}</span>
                          <span className={cn('rounded-full px-2.5 py-0.5 text-[10px] font-medium', config.color)}>{config.label}</span>
                        </div>
                        <h3 className="mt-2 font-display text-base font-bold">{event.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{event.description}</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-gradient-hero py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader eyebrow="Համառոտ ակնարկ" title="Հիմնական փուլերը" description="Հայաստանի պատմության ամենակարևոր փուլերը համառոտ տեսքով։" />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {timeline.map((item, i) => (
              <Reveal key={i} delay={i * 80} className="group">
                <div className="h-full rounded-xl border border-border bg-card p-5 shadow-soft card-hover">
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary">{item.year}</span>
                  <h3 className="mt-2 font-display text-base font-bold">{item.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Բացահայտեք հայ մշակույթը" description="Ծանոթացեք հայ ժողովրդի հարուստ մշակութային ժառանգությանը։" buttonText="Դիտել մշակույթը" buttonTo="/culture" />
    </>
  );
}
