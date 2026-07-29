import { Link } from 'react-router-dom';
import { MapPin, Users, Square, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Reveal } from './reveal';
import { LazyImage } from './lazy-image';
import { Badge } from './ui/badge';
import type { Region } from '@/data/armenia';

interface RegionCardProps {
  region: Region;
  className?: string;
}

export function RegionCard({ region, className }: RegionCardProps) {
  return (
    <Reveal
      variant="scale"
      className={cn('group flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-soft card-hover', className)}
    >
      <div className="relative overflow-hidden">
        <LazyImage
          src={region.image}
          alt={region.name}
          aspectRatio="aspect-[16/10]"
          imgClassName="group-hover:scale-105 transition-transform duration-700 ease-smooth"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <Badge className="bg-primary/90 text-primary-foreground backdrop-blur-sm">{region.tagline}</Badge>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-xl font-bold leading-tight">{region.name}</h3>
        <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-muted-foreground">{region.description}</p>

        <div className="mt-4 grid grid-cols-3 gap-2 border-t border-border pt-4">
          <div className="flex flex-col items-center gap-1 text-center">
            <Users className="h-4 w-4 text-primary" />
            <span className="text-[10px] uppercase tracking-wider text-muted-foreground">Բնակիչներ</span>
            <span className="text-sm font-semibold">{region.population}</span>
          </div>
          <div className="flex flex-col items-center gap-1 text-center">
            <Square className="h-4 w-4 text-primary" />
            <span className="text-[10px] uppercase tracking-wider text-muted-foreground">Տարածք</span>
            <span className="text-sm font-semibold">{region.area}</span>
          </div>
          <div className="flex flex-col items-center gap-1 text-center">
            <MapPin className="h-4 w-4 text-primary" />
            <span className="text-[10px] uppercase tracking-wider text-muted-foreground">Կենտրոն</span>
            <span className="text-sm font-semibold">{region.mainCity}</span>
          </div>
        </div>

        <Link to={`/destinations?region=${region.slug}`} className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-all hover:gap-2.5">
          Իմացեք ավելին
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </Reveal>
  );
}
