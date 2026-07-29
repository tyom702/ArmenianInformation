import { type HTMLAttributes, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

type Variant = 'up' | 'scale';

interface RevealProps extends HTMLAttributes<HTMLDivElement> {
  variant?: Variant;
  delay?: number;
}

export function Reveal({ variant = 'up', delay = 0, className, children, ...props }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const baseClass = variant === 'scale' ? 'reveal-scale' : 'reveal';

  useEffect(() => {
    const el = ref.current;
    if (!el || el.dataset.revealInit) return;
    el.dataset.revealInit = 'true';
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={cn(baseClass, className)} style={{ transitionDelay: `${delay}ms` }} {...props}>
      {children}
    </div>
  );
}
