import { Event } from '@/modules/events/lib/event.definitions'
import ReviewCard from '@/modules/reviews/components/ReviewCard'
import { fetchReviewsByEventId } from '@/modules/reviews/lib/review.actions'

export default async function Reviews({ eventId }: { eventId: Event['id'] }) {
    const reviews = await fetchReviewsByEventId(eventId)

    return (
        <div>
            {reviews.map((review) => (
                <ReviewCard review={review} key={review.id} className='mt-4' showReport/>
            ))}
        </div>
    )
}
