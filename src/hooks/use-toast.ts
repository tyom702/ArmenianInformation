type ToastVariant = 'default' | 'destructive';

type Toast = {
  id: string;
  title: string;
  description?: string;
  variant?: ToastVariant;
};

type Listener = (toasts: Toast[]) => void;

let toasts: Toast[] = [];
const listeners: Set<Listener> = new Set();
let toastCount = 0;

function notify() {
  listeners.forEach((fn) => fn([...toasts]));
}

function dismiss(id: string) {
  toasts = toasts.filter((t) => t.id !== id);
  notify();
}

function toast(t: Omit<Toast, 'id'>) {
  const id = `toast-${++toastCount}`;
  toasts = [...toasts, { ...t, id }];
  notify();
  setTimeout(() => dismiss(id), 5000);
}

function subscribe(listener: Listener): () => void {
  listeners.add(listener);
  listener([...toasts]);
  return () => listeners.delete(listener);
}

export type { Toast, ToastVariant };
export { toast, dismiss, subscribe };
