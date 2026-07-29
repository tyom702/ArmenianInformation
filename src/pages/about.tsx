import { Link } from 'react-router-dom';
import { ArrowRight, Globe, Heart, Sparkles } from 'lucide-react';
import { SEO } from '@/components/seo';
import { PageHero } from '@/components/page-hero';
import { SectionHeader } from '@/components/section-header';
import { CTASection } from '@/components/cta-section';
import { Reveal } from '@/components/reveal';
import { AnimatedCounter } from '@/components/animated-counter';
import { Button } from '@/components/ui/button';

const stats = [
  { value: 29743, suffix: ' կմ²', label: 'Տարածք' },
  { value: 3000, suffix: '+', label: 'Տարվա պատմություն' },
  { value: 1700, suffix: '+', label: 'Տարի քրիստոնեության' },
  { value: 1, suffix: '', label: 'Աշխարհի առաջին քրիստոնեական պետությունը' },
];

const values = [
  { icon: Globe, title: 'Աշխարհի խաչմերուկում', description: 'Հայաստանը գտնվում է Եվրոպայի և Ասիայի խաչմերուկում՝ պատմական Մետաքսի ճանապարհի վրա, դարեր շարունակ միավորելով մշակույթներ և քաղաքակրթություններ։' },
  { icon: Heart, title: 'Հյուրընկալ ժողովուրդ', description: 'Հայերը հայտնի են իրենց ջերմ հյուրընկալությամբ։ Հայկական տանը հյուրը սուրբ է, և յուրաքանչյուր այցելու դիմավորվում է սիրով և հարգանքով։' },
  { icon: Sparkles, title: 'Անզուգական ժառանգություն', description: 'Հայոց այբուբեն, խաչքարներ, միջնադարյան վանքեր, գորգագործություն և գինեգործություն՝ հազարամյակների մշակութային ժառանգություն, որը ապրում է մինչև օրս։' },
];

export default function About() {
  return (
    <>
      <SEO title="Մեր մասին" description="Հայաստանի մասին. աշխարհի ամենահին քրիստոնեական պետությունը, հարուստ պատմությամբ և մշակույթով երկիր։" path="/about" />

      <PageHero
        eyebrow="Մեր մասին"
        title="Բացահայտեք Հայաստանը"
        description="Աշխարհի ամենահին քրիստոնեական պետությունը՝ հազարամյակների պատմությամբ, վեհ բնությամբ և հարուստ մշակույթով։"
        image="https://images.pexels.com/photos/29206201/pexels-photo-29206201.jpeg"
      />

      <section className="border-b border-border bg-card py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal key={i} delay={i * 100} className="text-center">
              <div className="font-display text-3xl font-bold text-primary md:text-4xl">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="mt-2 text-xs text-muted-foreground md:text-sm">{stat.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6">
          <Reveal>
            <SectionHeader eyebrow="Ծանոթություն" title="Աշխարհների միջև" description="Հայաստանը եզակի երկիր է, որը միավորում է հին և նորը, Արևելքը և Արևմուտքը։" align="left" />
            <div className="mt-8 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                Հայաստանը գտնվում է Կովկասում՝ շրջապատված վեհ լեռներով և խոր կիրճերով։ Երկիրը հարուստ է բնության գեղեցկությամբ՝ սկսած Արարատ լեռան հանդիսավոր տեսարանից մինչև Սևանա լճի կապույտ ջրերը։
              </p>
              <p>
                Հայ ժողովուրդը ունի ավելի քան 3000 տարվա պատմություն։ Այս ընթացքում հայերը ստեղծել են յուրահատուկ մշակույթ՝ սեփական այբուբեն, ճարտարապետություն, գրականություն և արվեստ, որոնք հազարամյակներ շարունակ ծաղկում են ապրել։
              </p>
              <p>
                301 թվականին Հայաստանը դարձավ աշխարհի առաջին քրիստոնեական պետությունը՝ դասավորելով հայ մշակույթի զարգացման նոր հիմքեր։ Այսօր երկրում կան հազարավոր վանքեր և եկեղեցիներ, որոնք ապացույցն են հայ ժողովրդի հոգևոր ժառանգության։
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-gradient-hero py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader eyebrow="Ինչու Հայաստան" title="Հայաստանի առանձնահատկությունը" description="Այն, ինչ Հայաստանը դարձնում է եզակի ուղղություն ճանապարհորդների համար։" />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {values.map((value, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="group h-full rounded-xl border border-border bg-card p-6 shadow-soft card-hover">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                    <value.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-lg font-bold">{value.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{value.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Պլանավորեք ձեր ճանապարհորդությունը" description="Եկեք բացահայտենք միասին այս հրաշալի երկիրը։ Մենք այստեղ ենք՝ ձեզ օգնելու համար։" buttonText="Կապվել մեզ հետ" buttonTo="/contact">
        <Button asChild variant="outline" size="lg">
          <Link to="/destinations">
            Դիտել ուղղությունները
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CTASection>
    </>
  );
}
