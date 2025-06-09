import { Card, CardHeader, CardContent } from '@/modules/ui/card'
import { Skeleton } from '@/modules/ui/skeleton'

export default function EventCardSkeleton({
    className
}: {
    className?: string
}) {
    return (
        <Card className={className}>
            <CardHeader>
                <div className="flex items-center gap-2">
                    <Skeleton className="h-4 w-20 rounded" />
                    <Skeleton className="h-4 w-10 rounded" />
                </div>
                <Skeleton className="h-6 w-3/4 mt-4 rounded" />
                <Skeleton className="h-4 w-full mt-2 rounded" />
            </CardHeader>
            <CardContent className="[&>div]:mt-1">
                <div className="flex gap-2 !mt-0 items-center">
                    <Skeleton className="h-4 w-4 rounded" />
                    <Skeleton className="h-4 w-24 rounded" />
                </div>
                <div className="flex gap-2 items-center">
                    <Skeleton className="h-4 w-4 rounded" />
                    <Skeleton className="h-4 w-16 rounded" />
                </div>
                <div className="flex gap-2 items-center">
                    <Skeleton className="h-4 w-4 rounded" />
                    <Skeleton className="h-4 w-32 rounded" />
                </div>
            </CardContent>
        </Card>
    )
}
