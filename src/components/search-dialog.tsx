import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { searchItems } from '@/lib/search-index';

interface SearchDialogProps {
  open: boolean;
  onClose: () => void;
}

export function SearchDialog({ open, onClose }: SearchDialogProps) {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const results = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return searchItems.filter((item) => item.title.toLowerCase().includes(q) || item.description.toLowerCase().includes(q)).slice(0, 8);
  }, [query]);

  if (!open) return null;

  const handleNavigate = (path: string) => {
    navigate(path);
    setQuery('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[80] flex items-start justify-center p-4 pt-[10vh]">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className={cn('relative z-10 w-full max-w-xl overflow-hidden rounded-2xl border border-border bg-card shadow-xlarge animate-scale-in')}>
        <div className="flex items-center gap-3 border-b border-border p-4">
          <Search className="h-5 w-5 text-muted-foreground" />
          <input
            autoFocus
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Որոնեք մարզեր, ուղղություններ, ուտեստներ..."
            className="flex-1 bg-transparent text-base outline-none placeholder:text-muted-foreground/60"
            onKeyDown={(e) => {
              if (e.key === 'Escape') onClose();
              if (e.key === 'Enter' && results[0]) handleNavigate(results[0].path);
            }}
          />
          <button onClick={onClose} className="rounded-md p-1 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground" aria-label="Փակել">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="max-h-[50vh] overflow-y-auto">
          {query.trim() === '' ? (
            <div className="p-8 text-center text-sm text-muted-foreground">Սկսեք գրել՝ որոնելու համար</div>
          ) : results.length === 0 ? (
            <div className="p-8 text-center text-sm text-muted-foreground">Ոչ մի արդյունք չգտնվեց։</div>
          ) : (
            <div className="py-2">
              {results.map((item, i) => (
                <button key={i} onClick={() => handleNavigate(item.path)} className="flex w-full items-start gap-3 px-4 py-3 text-left transition-colors hover:bg-accent">
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium text-foreground">{item.title}</span>
                      <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-medium text-primary">{item.category}</span>
                    </div>
                    <p className="mt-0.5 line-clamp-1 text-xs text-muted-foreground">{item.description}</p>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
