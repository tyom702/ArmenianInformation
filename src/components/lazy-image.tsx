import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { Skeleton } from './ui/skeleton';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  aspectRatio?: string;
}

export function LazyImage({ src, alt, className, imgClassName, aspectRatio = 'aspect-[4/3]' }: LazyImageProps) {
  const [loaded, setLoaded] = useState(false);
  const [inView, setInView] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            observer.unobserve(el);
          }
        });
      },
      { rootMargin: '100px' },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className={cn('relative overflow-hidden', aspectRatio, className)}>
      {!loaded && <Skeleton className="absolute inset-0 h-full w-full" />}
      {inView && (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          className={cn(
            'h-full w-full object-cover transition-all duration-700 ease-smooth',
            loaded ? 'opacity-100 blur-0 scale-100' : 'opacity-0 blur-md scale-105',
            imgClassName,
          )}
        />
      )}
    </div>
  );
}
