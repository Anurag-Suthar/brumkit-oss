import { Skeleton } from '@repo/ui';

/**
 * Skeleton loader for the Home page
 * Matches the structure of the landing page.
 */
export function HomeSkeleton() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-8 space-y-8">
      <div className="absolute top-4 right-4">
        <Skeleton className="h-9 w-9 rounded-md" />
      </div>
      <main className="max-w-2xl text-center flex flex-col items-center">
        <Skeleton className="h-12 w-64 md:h-16 md:w-96 mb-4" />
        <Skeleton className="h-6 w-80 md:w-[450px] mb-8" />

        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center w-full">
          <Skeleton className="h-11 w-full sm:w-32 rounded-md" />
          <Skeleton className="h-11 w-full sm:w-32 rounded-md" />
        </div>

        <div className="mt-8 rounded-lg border bg-card p-4 text-left w-full space-y-2 opacity-50">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-5 w-40" />
          <Skeleton className="h-4 w-32" />
        </div>
      </main>
    </div>
  );
}
