import { Moon, Sun } from 'lucide-react';
import { useTheme } from './theme-provider';
import { cn } from '@/lib/utils';

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        'relative flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-background/50 text-foreground transition-all duration-300 hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
        className,
      )}
      aria-label={theme === 'light' ? 'Անցնել մուգ ռեժիմի' : 'Անցնել բաց ռեժիմի'}
    >
      <Sun className={cn('h-4 w-4 transition-all duration-300', theme === 'light' ? 'rotate-0 scale-100' : '-rotate-90 scale-0')} />
      <Moon className={cn('absolute h-4 w-4 transition-all duration-300', theme === 'dark' ? 'rotate-0 scale-100' : 'rotate-90 scale-0')} />
    </button>
  );
}
