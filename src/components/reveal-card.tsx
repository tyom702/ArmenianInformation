import { Link } from 'react-router-dom';
import { Link as LinkIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { useReveal } from '@/hooks/use-reveal';

type RevealCardProps = {
  title: string;
  description: string;
  image: string;
  tag?: string;
  to?: string;
  className?: string;
};

export function RevealCard({
  title,
  description,
  image,
  tag,
  to,
  className,
}: RevealCardProps) {
  const { ref, isVisible } = useReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={cn('reveal', isVisible && 'is-visible', className)}
    >
      <Card className="group h-full overflow-hidden border-border/60 p-0 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl">
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={image}
            alt={title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
          {tag && (
            <span className="absolute left-4 top-4 rounded-full bg-background/80 px-3 py-1 text-xs font-medium uppercase tracking-wider text-foreground backdrop-blur">
              {tag}
            </span>
          )}
        </div>
        <CardHeader className="space-y-2">
          <CardTitle className="font-display text-2xl">{title}</CardTitle>
          {description && (
            <CardDescription className="text-pretty text-sm leading-relaxed">
              {description}
            </CardDescription>
          )}
        </CardHeader>
        <CardContent>
          {to && (
            <Button asChild variant="ghost" size="sm" className="px-0">
              <Link to={to}>
                Discover more <LinkIcon className="ml-1 h-3.5 w-3.5" />
              </Link>
            </Button>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
