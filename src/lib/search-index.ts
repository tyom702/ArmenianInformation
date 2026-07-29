import { regions, destinations, dishes, cultureCards, historyEvents, nationalSymbols } from '@/data/armenia';

export interface SearchItem {
  title: string;
  description: string;
  category: string;
  path: string;
}

export const searchItems: SearchItem[] = [
  ...regions.map((r) => ({
    title: r.name,
    description: r.description,
    category: 'Մարզ',
    path: `/destinations?region=${r.slug}`,
  })),
  ...destinations.map((d) => ({
    title: d.name,
    description: d.shortDesc,
    category: 'Ուղղություն',
    path: '/destinations',
  })),
  ...dishes.map((d) => ({
    title: d.name,
    description: d.description,
    category: 'Խոհանոց',
    path: '/cuisine',
  })),
  ...cultureCards.map((c) => ({
    title: c.title,
    description: c.description,
    category: 'Մշակույթ',
    path: '/culture',
  })),
  ...historyEvents.map((h) => ({
    title: h.title,
    description: h.description,
    category: 'Պատմություն',
    path: '/history',
  })),
  ...nationalSymbols.map((s) => ({
    title: s.name,
    description: s.description,
    category: 'Խորհրդանիշ',
    path: '/culture',
  })),
];
