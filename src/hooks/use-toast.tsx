import { createContext, useCallback, useContext, useEffect, useRef, useState, type ReactNode } from 'react';

type ToastVariant = 'default' | 'destructive';

type Toast = {
  id: string;
  title: string;
  description?: string;
  variant?: ToastVariant;
};

type ToastContextValue = {
  toast: (toast: Omit<Toast, 'id'>) => void;
};

const ToastContext = createContext<ToastContextValue | undefined>(undefined);

let toastCount = 0;

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);
  const timeoutsRef = useRef<Record<string, ReturnType<typeof setTimeout>>>({});

  const dismiss = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
    if (timeoutsRef.current[id]) {
      clearTimeout(timeoutsRef.current[id]);
      delete timeoutsRef.current[id];
    }
  }, []);

  const toast = useCallback((t: Omit<Toast, 'id'>) => {
    const id = `toast-${++toastCount}`;
    setToasts((prev) => [...prev, { ...t, id }]);
    timeoutsRef.current[id] = setTimeout(() => dismiss(id), 5000);
  }, [dismiss]);

  useEffect(() => {
    return () => {
      Object.values(timeoutsRef.current).forEach(clearTimeout);
    };
  }, []);

  return (
    <ToastContext.Provider value={{ toast }}>
      {children}
      <div className="pointer-events-none fixed bottom-4 right-4 z-[100] flex flex-col-reverse gap-2">
        {toasts.map((t) => (
          <div
            key={t.id}
            className={`group pointer-events-auto relative w-full max-w-sm overflow-hidden rounded-xl border p-4 shadow-large animate-slide-in-right ${
              t.variant === 'destructive'
                ? 'border-destructive/30 bg-destructive text-destructive-foreground'
                : 'border-border bg-card text-card-foreground'
            }`}
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
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) throw new Error('useToast must be used within ToastProvider');
  return context;
}
