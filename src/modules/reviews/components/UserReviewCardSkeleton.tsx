import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
} from '@/modules/ui/card'
import { Skeleton } from '@/modules/ui/skeleton'
import clsx from 'clsx'

export default function UserReviewCardSkeleton({
    className
}: {
    className?: string
}) {
    return (
        <Card className={clsx(className, 'h-full')}>
            <CardHeader>
                <CardTitle className="flex justify-between items-center">
                    <Skeleton className="h-6 w-32" />
                    <Skeleton className="h-8 w-8 rounded-full" />
                </CardTitle>
                <CardDescription className="flex gap-2 items-center">
                    <Skeleton className="h-5 w-56" />
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    <Skeleton className="h-6 w-1/2" />
                    <Skeleton className="h-24 w-full" />
                    <div className="flex gap-2">
                        <Skeleton className="h-10 w-24" />
                        <Skeleton className="h-10 w-24" />
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
