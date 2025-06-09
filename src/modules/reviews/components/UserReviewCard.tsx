import { Event } from '@/modules/events/lib/event.definitions'
import ReviewForm from '@/modules/reviews/components/ReviewForm'
import { fetchUserReviewInEvent } from '@/modules/reviews/lib/review.actions'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
} from '@/modules/ui/card'
import { differenceInHours } from 'date-fns'
import clsx from 'clsx'
import { Info } from 'lucide-react'
import ReviewCard from '@/modules/reviews/components/ReviewCard'
import DeleteReviewButton from '@/modules/reviews/components/DeleteReviewButton'

export default async function UserReviewCard({
    eventId,
    className
}: {
    eventId: Event['id']
    className?: string
}) {
    const hasReviwed = await fetchUserReviewInEvent(eventId)
    const oneDayHasPassed = hasReviwed
        ? differenceInHours(new Date(), new Date(hasReviwed.createdAt)) > 24
        : false

    if (hasReviwed)
        return (
            <Card className={clsx(className, 'h-full')}>
                <CardHeader>
                    <CardTitle className="flex justify-between items-center">
                        {oneDayHasPassed
                            ? 'Event reviewed'
                            : hasReviwed
                            ? 'Update your review'
                            : 'Write a review'}
                        <DeleteReviewButton
                            eventId={eventId}
                            reviewId={hasReviwed.id}
                        />
                    </CardTitle>
                    <CardDescription className="flex gap-2 items-center">
                        <Info /> You can only update your review within 24 hours
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    {oneDayHasPassed ? (
                        <ReviewCard review={hasReviwed} />
                    ) : (
                        <ReviewForm
                            eventId={eventId}
                            edit={true}
                            defaultValues={hasReviwed}
                        />
                    )}
                </CardContent>
            </Card>
        )

    return (
        <Card className={clsx(className, 'h-full')}>
            <CardHeader>
                <CardTitle className="flex justify-between items-center">
                    Write a review
                </CardTitle>
            </CardHeader>
            <CardContent>
                <ReviewForm eventId={eventId} />
            </CardContent>
        </Card>
    )
}
