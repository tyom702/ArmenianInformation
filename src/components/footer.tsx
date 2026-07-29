import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { Logo } from './logo';
import { navLinks } from '@/data/armenia';

export function Footer() {
  const exploreLinks = navLinks.slice(0, 6);
  const aboutLinks = navLinks.slice(6);

  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Logo className="mb-4" />
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              Հայաստանի զբոսաշրջային ուղեցույց։ Բացահայտեք հնագույն երկիրը՝ հարուստ պատմությամբ, մշակույթով և բնությամբ։
            </p>
            <div className="mt-6 flex gap-3">
              {[
                { icon: Facebook, label: 'Facebook' },
                { icon: Instagram, label: 'Instagram' },
                { icon: Twitter, label: 'Twitter' },
                { icon: Youtube, label: 'YouTube' },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-all duration-300 hover:border-primary hover:bg-primary/10 hover:text-primary"
                  aria-label={label}
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider">Ուսումնասիրեք</h3>
            <ul className="space-y-2.5">
              {exploreLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm text-muted-foreground transition-colors hover:text-primary">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider">Մեր մասին</h3>
            <ul className="space-y-2.5">
              {aboutLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm text-muted-foreground transition-colors hover:text-primary">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider">Կապ</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>Հանրապետության հրապարակ 1, Երևան, Հայաստան</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 shrink-0 text-primary" />
                <span>+374 93 559511</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 shrink-0 text-primary" />
                <span>+374 43 755087</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 shrink-0 text-primary" />
                <span>tyomdiscord@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-6 text-center">
          <p className="text-sm text-muted-foreground">© 2024 Հայաստան — Բոլոր իրավունքները պաշտպանված են</p>
        </div>
      </div>
    </footer>
  );
}
