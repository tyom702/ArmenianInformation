import { Link } from 'react-router-dom';
import { type ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { Reveal } from './reveal';
import { LazyImage } from './lazy-image';
import { Badge } from './ui/badge';
import { Star } from 'lucide-react';

interface ImageCardProps {
  image: string;
  title: string;
  subtitle?: string;
  description?: string;
  badge?: string;
  unesco?: boolean;
  textOnImage?: boolean;
  className?: string;
  to?: string;
  onClick?: () => void;
  children?: ReactNode;
}

export function ImageCard({ image, title, subtitle, description, badge, unesco, textOnImage = false, className, to, onClick, children }: ImageCardProps) {
  const content = (
    <>
      <div className="relative overflow-hidden">
        <LazyImage
          src={image}
          alt={title}
          aspectRatio="aspect-[4/3]"
          imgClassName="group-hover:scale-105 transition-transform duration-700 ease-smooth"
        />
        {badge && (
          <div className="absolute left-3 top-3">
            <Badge className="bg-background/90 text-foreground backdrop-blur-sm">{badge}</Badge>
          </div>
        )}
        {unesco && (
          <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-background/90 px-2.5 py-1 text-xs font-semibold text-primary backdrop-blur-sm">
            <Star className="h-3 w-3 fill-primary" />
            ՅՈՒՆԵՍԿՈ
          </div>
        )}
      </div>

      {textOnImage ? (
        <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/20 to-transparent p-5">
          <h3 className="font-display text-lg font-bold text-white">{title}</h3>
          {subtitle && <p className="text-sm text-white/80">{subtitle}</p>}
        </div>
      ) : (
        <div className="p-5">
          {subtitle && <p className="mb-1 text-xs font-medium uppercase tracking-wider text-primary">{subtitle}</p>}
          <h3 className="font-display text-lg font-bold leading-tight">{title}</h3>
          {description && <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground">{description}</p>}
          {children}
        </div>
      )}
    </>
  );

  const classes = cn('group relative overflow-hidden rounded-xl border border-border bg-card shadow-soft card-hover', (onClick || to) && 'cursor-pointer', className);

  if (to) {
    return (
      <Reveal variant="scale" className={classes}>
        <Link to={to} className="block">
          {content}
        </Link>
      </Reveal>
    );
  }

  return (
    <Reveal variant="scale" className={classes} onClick={onClick}>
      {content}
    </Reveal>
  );
}
