import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SEO } from '@/components/seo';
import { PageHero } from '@/components/page-hero';
import { SectionHeader } from '@/components/section-header';
import { CTASection } from '@/components/cta-section';
import { ImageCard } from '@/components/image-card';
import { Badge } from '@/components/ui/badge';
import { destinations } from '@/data/armenia';
import { cn } from '@/lib/utils';

const categories = ['Բոլորը', 'Վանք', 'Պատմական', 'Բնություն'];

export default function Destinations() {
  const [searchParams] = useSearchParams();
  const regionFilter = searchParams.get('region');
  const [activeCategory, setActiveCategory] = useState('Բոլորը');

  const filtered = useMemo(() => {
    let result = destinations;
    if (regionFilter) {
      const region = destinations.find((d) => d.slug === regionFilter)?.region;
      if (region) {
        result = result.filter((d) => d.region === region);
      }
    }
    if (activeCategory !== 'Բոլորը') {
      result = result.filter((d) => d.category === activeCategory);
    }
    return result;
  }, [regionFilter, activeCategory]);

  return (
    <>
      <SEO title="Ուղղություններ" description="Հայաստանի ամենագրավիչ զբոսաշրջային ուղղությունները՝ վանքեր, տաճարներ, բնության հրաշալիքներ։" path="/destinations" />

      <PageHero
        eyebrow="Զբոսաշրջություն"
        title="Զբոսաշրջային ուղղություններ"
        description="Հայաստանի ամենագրավիչ վայրերը՝ հնագույն վանքերից մինչև վեհ բնության հրաշալիքներ։"
        image="https://images.pexels.com/photos/20446169/pexels-photo-20446169.jpeg"
      />

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader eyebrow="Բոլոր ուղղությունները" title="Ընտրեք ձեր արկածը" description="Ֆիլտրեք ըստ կատեգորիայի՝ գտնելու համար ճիշտ այն, ինչ փնտրում եք։" />

          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  'rounded-lg px-4 py-2 text-sm font-medium transition-all duration-300',
                  activeCategory === cat ? 'bg-primary text-primary-foreground shadow-primary' : 'border border-border bg-card text-foreground/70 hover:bg-accent hover:text-foreground',
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((dest) => (
              <ImageCard key={dest.slug} image={dest.image} title={dest.name} subtitle={dest.category} description={dest.shortDesc} unesco={dest.unesco}>
                <div className="mt-4 flex flex-wrap gap-2 border-t border-border pt-4">
                  {dest.facts.map((fact, i) => (
                    <Badge key={i} variant="secondary" className="text-[10px]">
                      {fact.label}: {fact.value}
                    </Badge>
                  ))}
                </div>
                <div className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
                  <span>Լավագույն ժամանակ՝ {dest.bestTime}</span>
                </div>
              </ImageCard>
            ))}
          </div>

          {filtered.length === 0 && <div className="mt-12 text-center text-muted-foreground">Այս կատեգորիայում ուղղություններ չկան։</div>}
        </div>
      </section>

      <CTASection title="Կա՞ն հարցեր" description="Կապվեք մեզ հետ, և մենք կօգնենք ձեզ պլանավորել ձեր ճանապարհորդությունը։" buttonText="Կապվել մեզ հետ" buttonTo="/contact" />
    </>
  );
}
