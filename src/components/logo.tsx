import { Link } from 'react-router-dom';
import { Mountain } from 'lucide-react';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export function Logo({ className, showText = true }: LogoProps) {
  return (
    <Link to="/" className={cn('flex items-center gap-2.5 font-display font-bold tracking-tight', className)}>
      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-primary">
        <Mountain className="h-5 w-5" />
      </span>
      {showText && <span className="text-xl">Հայաստան</span>}
    </Link>
  );
}
