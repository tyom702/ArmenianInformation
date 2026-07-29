import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/navbar';
import { Footer } from './components/footer';
import { ScrollToTop } from './components/scroll-to-top';
import { ScrollToTopButton } from './components/scroll-to-top-button';
import { Toaster } from './components/toaster';
import { PageSkeleton } from './components/page-skeleton';

const Home = lazy(() => import('./pages/home'));
const Regions = lazy(() => import('./pages/regions'));
const Destinations = lazy(() => import('./pages/destinations'));
const Gallery = lazy(() => import('./pages/gallery'));
const History = lazy(() => import('./pages/history'));
const Culture = lazy(() => import('./pages/culture'));
const Cuisine = lazy(() => import('./pages/cuisine'));
const About = lazy(() => import('./pages/about'));
const Contact = lazy(() => import('./pages/contact'));
const NotFound = lazy(() => import('./pages/not-found'));
const DestinationDetail = lazy(() => import('./pages/destination-detail'));

export default function App() {
  return (
    <>
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        Անցնել բովանդակությանը
      </a>
      <ScrollToTop />
      <Navbar />
      <main id="content">
        <Suspense fallback={<PageSkeleton />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/regions" element={<Regions />} />
            <Route path="/destinations" element={<Destinations />} />
            <Route path="/destinations/:slug" element={<DestinationDetail />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/history" element={<History />} />
            <Route path="/culture" element={<Culture />} />
            <Route path="/cuisine" element={<Cuisine />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      <ScrollToTopButton />
      <Toaster />
    </>
  );
}
