import { useState, useMemo } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { SEO } from '@/components/seo';
import { PageHero } from '@/components/page-hero';
import { SectionHeader } from '@/components/section-header';
import { galleryImages, galleryCategories } from '@/data/armenia';
import { cn } from '@/lib/utils';
import { Reveal } from '@/components/reveal';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = useMemo(() => {
    if (activeCategory === 'all') return galleryImages;
    return galleryImages.filter((img) => img.category === activeCategory);
  }, [activeCategory]);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = () => setLightboxIndex((prev) => (prev === null ? null : (prev - 1 + filtered.length) % filtered.length));
  const nextImage = () => setLightboxIndex((prev) => (prev === null ? null : (prev + 1) % filtered.length));

  return (
    <>
      <SEO title="Պատկերասրահ" description="Հայաստանի գեղեցիկ պատկերների հավաքածու՝ բնություն, վանքեր, քաղաքներ և մշակույթ։" path="/gallery" />

      <PageHero
        eyebrow="Պատկերասրահ"
        title="Հայաստանը կադրում"
        description="Հայաստանի անզուգական բնության, վանքերի և քաղաքների պատկերների հավաքածու։"
        image="https://images.pexels.com/photos/28543118/pexels-photo-28543118.jpeg"
      />

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader eyebrow="Լուսանկարներ" title="Հայաստանը շրջանակի մեջ" description="Ընտրեք կատեգորիան՝ դիտելու համար ձեզ հետաքրքրող թեմայի պատկերները։" />

          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {galleryCategories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className={cn(
                  'rounded-lg px-4 py-2 text-sm font-medium transition-all duration-300',
                  activeCategory === cat.value ? 'bg-primary text-primary-foreground shadow-primary' : 'border border-border bg-card text-foreground/70 hover:bg-accent hover:text-foreground',
                )}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="mt-12 masonry columns-1 sm:columns-2 lg:columns-3">
            {filtered.map((img, i) => (
              <Reveal
                key={`${img.title}-${i}`}
                variant="scale"
                className="masonry-item group relative cursor-pointer overflow-hidden rounded-xl border border-border shadow-soft card-hover"
                onClick={() => openLightbox(i)}
              >
                <img src={img.src} alt={img.title} loading="lazy" className="w-full object-cover transition-transform duration-700 ease-smooth group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute bottom-0 left-0 right-0 translate-y-2 p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <h3 className="font-display text-base font-bold text-white">{img.title}</h3>
                  <p className="text-xs text-white/80">{img.caption}</p>
                  <p className="mt-1 text-[10px] text-primary">{img.location}</p>
                </div>
                <div className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-lg bg-white/20 text-white opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                  <ZoomIn className="h-4 w-4" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-[90] flex items-center justify-center bg-black/90 p-4 animate-fade-in" onClick={closeLightbox}>
          <button className="absolute right-6 top-6 flex h-11 w-11 items-center justify-center rounded-lg bg-white/10 text-white transition-colors hover:bg-white/20" onClick={closeLightbox} aria-label="Փակել">
            <X className="h-5 w-5" />
          </button>
          <button className="absolute left-4 flex h-12 w-12 items-center justify-center rounded-lg bg-white/10 text-white transition-colors hover:bg-white/20" onClick={(e) => { e.stopPropagation(); prevImage(); }} aria-label="Նախորդ">
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button className="absolute right-4 flex h-12 w-12 items-center justify-center rounded-lg bg-white/10 text-white transition-colors hover:bg-white/20" onClick={(e) => { e.stopPropagation(); nextImage(); }} aria-label="Հաջորդ">
            <ChevronRight className="h-6 w-6" />
          </button>
          <div className="max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <img src={filtered[lightboxIndex].src} alt={filtered[lightboxIndex].title} className="max-h-[80vh] w-auto rounded-xl object-contain" />
            <div className="mt-4 text-center">
              <h3 className="font-display text-lg font-bold text-white">{filtered[lightboxIndex].title}</h3>
              <p className="text-sm text-white/80">{filtered[lightboxIndex].caption}</p>
              <p className="mt-1 text-xs text-primary">{filtered[lightboxIndex].location}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
