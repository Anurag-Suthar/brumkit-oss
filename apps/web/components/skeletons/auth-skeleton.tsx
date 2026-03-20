import { Card, CardContent, CardFooter, CardHeader, Skeleton } from '@repo/ui';

/**
 * Skeleton loader for authentication pages (Login, Register, etc.)
 * Matches the structure of the authentication card.
 */
export function AuthSkeleton() {
  return (
    <Card className="w-full">
      <CardHeader className="space-y-1">
        <Skeleton className="h-8 w-1/2 mb-2" />
        <Skeleton className="h-4 w-full max-w-[280px]" />
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Placeholder for 3 form fields */}
        {[1, 2, 3].map((i) => (
          <div key={i} className="space-y-2">
            <div className="flex justify-between">
              <Skeleton className="h-4 w-20" />
            </div>
            <Skeleton className="h-10 w-full rounded-md" />
          </div>
        ))}
        <Skeleton className="h-10 w-full rounded-md mt-6" />
      </CardContent>
      <CardFooter className="flex flex-col items-center">
        <Skeleton className="h-4 w-48" />
      </CardFooter>
    </Card>
  );
}
