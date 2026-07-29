import { type ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { Reveal } from './reveal';

interface SectionHeaderProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  className?: string;
  align?: 'left' | 'center';
}

export function SectionHeader({ eyebrow, title, description, className, align = 'center' }: SectionHeaderProps) {
  return (
    <Reveal className={cn('flex flex-col gap-3', align === 'center' ? 'items-center text-center' : 'items-start text-left', className)}>
      {eyebrow && (
        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-primary/40" />
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">{eyebrow}</span>
          <span className="h-px w-8 bg-primary/40" />
        </div>
      )}
      <h2 className="max-w-3xl font-display text-3xl font-bold leading-tight tracking-tight md:text-4xl lg:text-[2.75rem]">{title}</h2>
      {description && <p className="max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">{description}</p>}
    </Reveal>
  );
}
