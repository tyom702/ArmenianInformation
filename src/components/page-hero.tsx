import { type ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { Reveal } from './reveal';

interface PageHeroProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  image: string;
  className?: string;
}

export function PageHero({ eyebrow, title, description, image, className }: PageHeroProps) {
  return (
    <section className={cn('relative flex min-h-[50vh] items-center overflow-hidden', className)}>
      <div className="absolute inset-0">
        <img src={image} alt="" className="h-full w-full object-cover animate-kenburns" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30" />
      </div>
      <div className="relative mx-auto w-full max-w-7xl px-6 py-24">
        <Reveal className="max-w-2xl text-white">
          {eyebrow && (
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-10 bg-primary" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">{eyebrow}</span>
            </div>
          )}
          <h1 className="font-display text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">{title}</h1>
          {description && <p className="mt-5 max-w-xl text-base leading-relaxed text-white/85 md:text-lg">{description}</p>}
        </Reveal>
      </div>
    </section>
  );
}
