import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Menu, Search } from 'lucide-react';
import { cn } from '@/lib/utils';
import { navLinks } from '@/data/armenia';
import { Logo } from './logo';
import { ThemeToggle } from './theme-toggle';
import { SearchDialog } from './search-dialog';
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle } from './ui/sheet';
import { Button } from './ui/button';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <>
      <header className={cn('fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-smooth', scrolled ? 'glass border-b border-border py-2' : 'py-4')}>
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6" aria-label="Հիմնական նավիգացիա">
          <Logo />

          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.path}
                href={link.path}
                className={cn('relative rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-200', isActive(link.path) ? 'text-primary' : 'text-foreground/70 hover:text-foreground')}
              >
                {link.label}
                {isActive(link.path) && <span className="absolute bottom-0 left-1/2 h-0.5 w-6 -translate-x-1/2 rounded-full bg-primary" />}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setSearchOpen(true)}
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-background/50 text-foreground transition-all duration-300 hover:bg-accent"
              aria-label="Որոնում"
            >
              <Search className="h-4 w-4" />
            </button>
            <ThemeToggle />

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="lg:hidden" aria-label="Մենյու">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <SheetHeader>
                  <SheetTitle>Նավիգացիա</SheetTitle>
                </SheetHeader>
                <nav className="mt-4 flex flex-col gap-1 px-4" aria-label="Բջջային նավիգացիա">
                  {navLinks.map((link) => (
                    <a
                      key={link.path}
                      href={link.path}
                      className={cn('rounded-lg px-4 py-3 text-sm font-medium transition-colors', isActive(link.path) ? 'bg-primary/10 text-primary' : 'text-foreground/70 hover:bg-accent hover:text-foreground')}
                    >
                      {link.label}
                    </a>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </header>

      <SearchDialog open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
