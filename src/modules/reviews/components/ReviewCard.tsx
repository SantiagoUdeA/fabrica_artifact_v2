import CreateReportButton from '@/modules/reports/components/CreateReportButton'
import { Review } from '@/modules/reviews/lib/review.definitions'
import Rating from '@/modules/shared/components/Rating'
import TimeAgo from '@/modules/shared/components/TimeAgo'
import { Card, CardContent, CardHeader, CardTitle } from '@/modules/ui/card'
import { User } from 'lucide-react'

export default function ReviewCard({
    review,
    className,
    showReport
}: {
    review: Review
    className?: string
    showReport?: boolean
}) {
    return (
        <Card className={className}>
            <CardHeader>
                <CardTitle className="flex gap-2 items-center">
                    <i className="rounded-full border border-solid border-black p-1">
                        <User />
                    </i>
                    <p>{review.user.displayName}</p>
                    {showReport && <CreateReportButton reviewId={review.id} />}
                </CardTitle>
            </CardHeader>
            <CardContent>
                <Rating rating={review.rating} />
                <TimeAgo date={review.createdAt} />
                <p className="mt-4">{review.comment}</p>
            </CardContent>
        </Card>
    )
}
