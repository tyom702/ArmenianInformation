import { type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { Reveal } from './reveal';

interface CTASectionProps {
  title: string;
  description: string;
  buttonText: string;
  buttonTo: string;
  children?: ReactNode;
}

export function CTASection({ title, description, buttonText, buttonTo, children }: CTASectionProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-hero py-20 md:py-28">
      <div className="bg-gradient-radial absolute inset-0" />
      <Reveal className="relative mx-auto max-w-3xl px-6 text-center">
        <h2 className="font-display text-3xl font-bold leading-tight tracking-tight md:text-4xl lg:text-[2.75rem]">{title}</h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">{description}</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button asChild size="lg">
            <Link to={buttonTo}>
              {buttonText}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          {children}
        </div>
      </Reveal>
    </section>
  );
}
