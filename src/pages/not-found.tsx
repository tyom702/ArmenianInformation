import { Link } from 'react-router-dom';
import { Home, Search } from 'lucide-react';
import { SEO } from '@/components/seo';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <>
      <SEO title="Էջը չի գտնվել" description="Այս էջը գոյություն չունի։ Վերադարձեք գլխավոր էջ։" path="/404" />
      <section className="flex min-h-screen items-center justify-center px-6">
        <div className="text-center">
          <div className="relative">
            <h1 className="font-display text-[8rem] font-bold leading-none text-primary/20 md:text-[12rem]">404</h1>
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="font-display text-2xl font-bold md:text-3xl">Էջը գոյություն չունի</p>
            </div>
          </div>
          <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
            Ձեր որոնած էջը հնարավոր է տեղափոխված կամ ջնջված լինի։ Վերադարձեք գլխավոր էջ կամ օգտվեք որոնումից։
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button asChild size="lg">
              <Link to="/">
                <Home className="mr-2 h-4 w-4" />
                Գլխավոր էջ
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/destinations">
                <Search className="mr-2 h-4 w-4" />
                Ուղղություններ
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
