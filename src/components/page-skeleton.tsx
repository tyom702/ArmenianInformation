import { Skeleton } from './ui/skeleton';

export function PageSkeleton() {
  return (
    <div className="min-h-screen">
      <Skeleton className="h-[50vh] w-full rounded-none" />
      <div className="mx-auto max-w-7xl px-6 py-16">
        <Skeleton className="mx-auto mb-4 h-6 w-32" />
        <Skeleton className="mx-auto mb-6 h-12 w-80" />
        <Skeleton className="mx-auto mb-12 h-5 w-96" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="overflow-hidden rounded-xl border border-border">
              <Skeleton className="aspect-[4/3] w-full rounded-none" />
              <div className="space-y-2 p-5">
                <Skeleton className="h-4 w-20" />
                <Skeleton className="h-6 w-40" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
