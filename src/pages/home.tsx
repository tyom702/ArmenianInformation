import { Link } from 'react-router-dom';
import { ArrowRight, Mountain, Church, Utensils, Palette, Calendar } from 'lucide-react';
import { SEO } from '@/components/seo';
import { Reveal } from '@/components/reveal';
import { SectionHeader } from '@/components/section-header';
import { CTASection } from '@/components/cta-section';
import { AnimatedCounter } from '@/components/animated-counter';
import { ImageCard } from '@/components/image-card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { regions, destinations, heroImage } from '@/data/armenia';

const stats = [
  { value: 3000, suffix: '+', label: 'տարվա պատմություն' },
  { value: 4000, suffix: '+', label: 'վանք և եկեղեցի' },
  { value: 11, suffix: '', label: 'մարզ, այդ թվում՝ մայրաքաղաքը' },
  { value: 50, suffix: '+', label: 'ազգային ուտեստ' },
];

const features = [
  { icon: Mountain, title: 'Վեհ բնություն', description: 'Արարատից մինչև Սևանա լիճ՝ հայկական բարձրավանդակի անզուգական լանդշաֆտները։' },
  { icon: Church, title: 'Հնագույն վանքեր', description: 'Քրիստոնեության առաջին պետությունը՝ 1700 տարվա վանքային ժառանգությամբ։' },
  { icon: Utensils, title: 'Հարուստ խոհանոց', description: 'Աշխարհի ամենահին գինեգործարանի երկիրը՝ ավանդական համեղ ուտեստներով։' },
  { icon: Palette, title: 'Առանձնահատուկ մշակույթ', description: 'Հայոց այբուբեն, խաչքարներ, գորգագործություն և հազարամյակների ավանդույթներ։' },
];

export default function Home() {
  const featuredDestinations = destinations.slice(0, 6);
  const featuredRegions = regions.slice(0, 6);

  return (
    <>
      <SEO title="Բացահայտեք Հայաստանը" description="Հայաստանի պաշտոնական զբոսաշրջային ուղեցույց։ Հնագույն վանքեր, վեհ բնություն, հարուստ մշակույթ և ավանդական խոհանոց։" path="/" image={heroImage} />

      <section className="relative flex min-h-screen items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Արարատ լեռ" className="h-full w-full object-cover animate-kenburns" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
        </div>
        <div className="relative mx-auto w-full max-w-7xl px-6">
          <div className="max-w-3xl hero-rise">
            <Badge className="mb-6 bg-primary/90 text-primary-foreground backdrop-blur-sm">Բարի գալուստ Հայաստան</Badge>
            <h1 className="font-display text-5xl font-bold leading-[1.1] tracking-tight text-white md:text-6xl lg:text-7xl">Արարատի երկիրը</h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/85 md:text-xl">
              Բացահայտեք աշխարհի ամենահին քրիստոնեական պետությունը՝ հազարամյակների պատմությամբ, վեհ լեռներով և հարուստ մշակույթով։
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link to="/destinations">
                  Ուսումնասիրեք
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white/30 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20">
                <Link to="/about">Մեր մասին</Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-white/40 p-1.5">
            <div className="h-2 w-1 rounded-full bg-white/60 animate-bounce" />
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-card py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal key={i} delay={i * 100} className="text-center">
              <div className="font-display text-4xl font-bold text-primary md:text-5xl">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="mt-2 text-sm text-muted-foreground md:text-base">{stat.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader eyebrow="Ինչու Հայաստան" title="Անզուգական ճանապարհորդություն" description="Հայաստանը հազարամյակների պատմություն, բնության վեհություն և հյուրընկալ ժողովուրդ ունեցող երկիր է։" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="group h-full rounded-xl border border-border bg-card p-6 shadow-soft card-hover">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-lg font-bold">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-hero py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader eyebrow="Մարզեր" title="Հայաստանի մարզերը" description="Երկրի 11 մարզերը՝ յուրաքանչյուրն իր յուրահատուկ բնույթով և գանձերով։" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredRegions.map((region) => (
              <ImageCard
                key={region.slug}
                image={region.image}
                title={region.name}
                subtitle={region.tagline}
                description={region.description}
                badge={region.mainCity}
                onClick={() => (window.location.href = `/destinations?region=${region.slug}`)}
              />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button asChild variant="outline" size="lg">
              <Link to="/regions">
                Բոլոր մարզերը
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader eyebrow="Ուղղություններ" title="Ամենաայցելվող վայրերը" description="Հայաստանի ամենագրավիչ զբոսաշրջային ուղղությունները՝ պատմության և բնության գլուխգործոցները։" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredDestinations.map((dest) => (
              <ImageCard key={dest.slug} image={dest.image} title={dest.name} subtitle={dest.category} description={dest.shortDesc} unesco={dest.unesco} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button asChild variant="outline" size="lg">
              <Link to="/destinations">
                Բոլոր ուղղությունները
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-card py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { icon: Calendar, title: 'Պատմություն', desc: 'Հազարամյակների պատմություն՝ Հայկ Նահապետից մինչև մեր օրերը։', path: '/history' },
              { icon: Palette, title: 'Մշակույթ', desc: 'Հայոց այբուբեն, խաչքարներ, գորգագործություն և ավանդույթներ։', path: '/culture' },
              { icon: Utensils, title: 'Խոհանոց', desc: 'Ավանդական հայկական ուտեստներ և աշխարհի ամենահին գինին։', path: '/cuisine' },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 100}>
                <Link to={item.path} className="group flex h-full flex-col rounded-xl border border-border bg-background p-6 shadow-soft card-hover">
                  <item.icon className="h-8 w-8 text-primary" />
                  <h3 className="mt-4 font-display text-xl font-bold">{item.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-all group-hover:gap-2.5">
                    Իմացեք ավելին
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Պատրաստ ե՞ք բացահայտել Հայաստանը" description="Սկսեք ձեր ճանապարհորդությունը հենց հիմա։ Մենք կօգնենք ձեզ գտնել լավագույն ուղղությունները։" buttonText="Սկսել ճանապարհորդությունը" buttonTo="/contact" />
    </>
  );
}
