import { useState, type FormEvent } from 'react';
import { Phone, Mail, Clock, Send, CheckCircle, Star, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { SEO } from '@/components/seo';
import { PageHero } from '@/components/page-hero';
import { Reveal } from '@/components/reveal';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from '@/hooks/use-toast';

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || '';
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '';
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '';

export default function Contact() {
  const [sending, setSending] = useState(false);
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const userName = formData.get('name') as string;
    const userEmail = formData.get('email') as string;
    const reviewText = formData.get('review') as string;
    const now = new Date();
    const dateTime = now.toLocaleString('en-GB', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    });

    const templateParams = {
      name: userName,
      email: userEmail,
      message: reviewText,
      rating: rating > 0 ? `${rating} / 5` : 'Չգնահատված',
      date_time: dateTime,
      to_email: 'tyomdiscord@gmail.com',
    };

    emailjs
      .send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams, { publicKey: EMAILJS_PUBLIC_KEY })
      .then(() => {
        toast({
          title: 'Շնորհակալություն ձեր կարծիքի համար',
          description: 'Ձեր կարծիքը հաջողությամբ ուղարկվեց։ Մենք խորապես գնահատում ենք ձեր արձագանքը։',
        });
        form.reset();
        setRating(0);
        setHoverRating(0);
        setSending(false);
      })
      .catch(() => {
        toast({
          title: 'Ինչ-որ բան սխալ գնաց',
          description: 'Կարծիքը չհաջողվեց ուղարկել։ Խնդրում ենք փորձել կրկին մի փոքր ուշ։',
          variant: 'destructive',
        });
        setSending(false);
      });
  };

  const contactInfo = [
    { icon: Phone, title: 'Հեռախոս', lines: ['+374 93 559511', '+374 43 755087'] },
    { icon: Mail, title: 'Էլ. փոստ', lines: ['tyomdiscord@gmail.com'] },
    { icon: Clock, title: 'Աշխատանքային ժամեր', lines: ['Երկ-Ուրբ. 9:00 — 18:00', 'Շբթ. 10:00 — 15:00'] },
  ];

  return (
    <>
      <SEO title="Կապ" description="Կապվեք մեզ հետ։ Հեռախոս, էլ. փոստ և այցելուների կարծիքների ձև՝ ձեր հարցերի համար։" path="/contact" />

      <PageHero
        eyebrow="Կապ"
        title="Կապվեք մեզ հետ"
        description="Ունե՞ք հարցեր կամ ցանկանում եք կիսվել ձեր տպավորություններով։ Մենք ուրախ կլինենք լսել ձեզ։"
        image="https://images.pexels.com/photos/29206201/pexels-photo-29206201.jpeg"
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {contactInfo.map((info, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="h-full rounded-xl border border-border bg-card p-6 text-center shadow-soft card-hover">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <info.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-base font-bold">{info.title}</h3>
                  {info.lines.map((line, j) => (
                    <p key={j} className="mt-1 text-sm text-muted-foreground">{line}</p>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20 md:pb-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 lg:grid-cols-2">
            <Reveal>
              <div className="rounded-2xl border border-border bg-card p-8 shadow-medium">
                <h2 className="font-display text-2xl font-bold">Թողեք ձեր կարծիքը</h2>
                <p className="mt-2 text-sm text-muted-foreground">Կիսվեք ձեր տպավորություններով՝ մեզ հետ և այլ այցելուների հետ։</p>
                <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                  <div className="space-y-2">
                    <Label htmlFor="name">Անուն</Label>
                    <Input id="name" name="name" required placeholder="Ձեր անունը" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Էլ. փոստ</Label>
                    <Input id="email" name="email" type="email" required placeholder="ձեր@փոստ.am" />
                    <p className="text-xs text-muted-foreground">Ձեր էլ. փոստը չի հրապարակվի։ Այն օգտագործվում է միայն կապ հաստատելու նպատակով։</p>
                  </div>
                  <div className="space-y-2">
                    <Label>Գնահատական</Label>
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((value) => (
                        <button
                          key={value}
                          type="button"
                          onClick={() => setRating(value)}
                          onMouseEnter={() => setHoverRating(value)}
                          onMouseLeave={() => setHoverRating(0)}
                          className="rounded-md p-1 transition-transform hover:scale-110"
                          aria-label={`${value} աստղ`}
                        >
                          <Star
                            className={`h-7 w-7 transition-colors ${
                              value <= (hoverRating || rating)
                                ? 'fill-amber-400 text-amber-400'
                                : 'fill-transparent text-muted-foreground'
                            }`}
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="review">Կարծիք</Label>
                    <Textarea id="review" name="review" required placeholder="Կիսվեք ձեր տպավորություններով..." rows={5} />
                  </div>
                  <Button type="submit" size="lg" className="w-full" disabled={sending}>
                    {sending ? (
                      <>
                        <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-primary-foreground border-t-transparent" />
                        Ուղարկվում է...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Ուղարկել կարծիքը
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="flex h-full flex-col gap-6">
                <div className="flex-1 overflow-hidden rounded-2xl border border-border shadow-medium">
                  <iframe
                    title="Երևանի քարտեզ"
                    src="https://www.openstreetmap.org/export/embed.html?bbox=44.4900%2C40.1700%2C44.5600%2C40.2000&layer=mapnik&marker=40.1792%2C44.5085"
                    className="h-full min-h-[300px] w-full"
                    style={{ border: 0 }}
                    loading="lazy"
                  />
                </div>

                <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
                  <h3 className="font-display text-lg font-bold">Հետևեք մեզ</h3>
                  <p className="mt-1 text-sm text-muted-foreground">Ստացեք վերջին նորություններն ու հրապարակումները։</p>
                  <div className="mt-4 flex gap-3">
                    {[
                      { icon: Facebook, label: 'Facebook' },
                      { icon: Instagram, label: 'Instagram' },
                      { icon: Twitter, label: 'Twitter' },
                      { icon: Youtube, label: 'YouTube' },
                    ].map(({ icon: Icon, label }) => (
                      <a key={label} href="#" className="flex h-11 w-11 items-center justify-center rounded-lg border border-border text-muted-foreground transition-all duration-300 hover:border-primary hover:bg-primary/10 hover:text-primary" aria-label={label}>
                        <Icon className="h-5 w-5" />
                      </a>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <div>
                      <h3 className="font-display text-base font-bold">Ձեր կարծիքը կարևոր է մեզ համար</h3>
                      <p className="mt-1 text-sm text-muted-foreground">Մենք կարդում ենք յուրաքանչյուր կարծիք և ձգտում ենք բարելավել մեր ծառայությունները ձեր արձագանքի հիման վրա։</p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
