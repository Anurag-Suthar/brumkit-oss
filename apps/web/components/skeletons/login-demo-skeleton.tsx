import { Card, CardHeader, Skeleton } from '@repo/ui';

/**
 * Skeleton loader for the Login Demo page
 * Matches the role-based cards structure.
 */
export function LoginDemoSkeleton() {
  return (
    <div className="container mx-auto max-w-4xl py-12">
      <div className="mb-8 text-center flex flex-col items-center">
        <Skeleton className="h-10 w-full max-w-[400px] mb-2" />
        <Skeleton className="h-6 w-full max-w-[600px]" />
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
        {[1, 2, 3, 4].map((i) => (
          <Card key={i} className="flex flex-col h-[180px] justify-between">
            <CardHeader>
              <Skeleton className="h-7 w-32" />
              <div className="mt-2 space-y-1">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6" />
              </div>
            </CardHeader>
            <div className="p-6 pt-0 mt-auto">
              <Skeleton className="h-10 w-full rounded-md" />
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-12 text-center flex justify-center">
        <Skeleton className="h-10 w-40 rounded-md" />
      </div>
    </div>
  );
}
