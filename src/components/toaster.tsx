import { useEffect, useState } from 'react';
import { subscribe, dismiss, type Toast as ToastType } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';

export function Toaster() {
  const [toasts, setToasts] = useState<ToastType[]>([]);

  useEffect(() => {
    return subscribe(setToasts);
  }, []);

  return (
    <div className="pointer-events-none fixed bottom-4 right-4 z-[100] flex flex-col-reverse gap-2">
      {toasts.map((t) => (
        <div
          key={t.id}
          className={cn(
            'group pointer-events-auto relative w-full max-w-sm overflow-hidden rounded-xl border p-4 shadow-large animate-slide-in-right',
            t.variant === 'destructive'
              ? 'border-destructive/30 bg-destructive text-destructive-foreground'
              : 'border-border bg-card text-card-foreground',
          )}
        >
          <div className="flex items-start justify-between gap-3">
            <div className="flex-1">
              <p className="font-medium text-sm">{t.title}</p>
              {t.description && <p className="mt-1 text-sm opacity-90">{t.description}</p>}
            </div>
            <button
              onClick={() => dismiss(t.id)}
              className="shrink-0 rounded-md opacity-60 transition-opacity hover:opacity-100 focus:outline-none"
              aria-label="Փակել"
            >
              <span className="text-lg leading-none">×</span>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
