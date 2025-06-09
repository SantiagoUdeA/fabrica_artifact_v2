import EventCard from '@/modules/events/components/EventCard'
import { fetchSingleEvent } from '@/modules/events/lib/event.actions'
import UserReviewCard from '@/modules/reviews/components/UserReviewCard'
import Reviews from '@/modules/reviews/components/Reviews'
import GoBackButton from '@/modules/shared/components/GoBackButton'
import SectionTitle from '@/modules/shared/components/SectionTitle'
import { Suspense } from 'react'
import UserReviewCardSkeleton from '@/modules/reviews/components/UserReviewCardSkeleton'
import EventCardSkeleton from '@/modules/events/components/EventCardSkeleton'
import AsyncEventCard from '@/modules/events/components/AsyncEventCard'
import { createClient } from '@/modules/auth/lib/supabase/server'
import LogInToReviewCard from '@/modules/reviews/components/LogInToReviewCard'

export default async function SingleEventPage({
    params
}: {
    params: Promise<{ eventId: string }>
}) {
    const { auth } = await createClient()
    const { data } = await auth.getUser()
    const user = data.user

    const { eventId } = await params
    const event = await fetchSingleEvent(eventId)

    return (
        <section className="p-4">
            <GoBackButton />
            <div className="grid sm:grid-cols-2 gap-4 mt-4">
                <Suspense fallback={<EventCardSkeleton />}>
                    <AsyncEventCard eventId={eventId} className="w-full" />
                </Suspense>
                {user ? (
                    <Suspense fallback={<UserReviewCardSkeleton />}>
                        <UserReviewCard eventId={eventId} />
                    </Suspense>
                ) : (
                    <LogInToReviewCard />
                )}
            </div>
            <SectionTitle className="mt-4">Reviews</SectionTitle>
            <Reviews eventId={event.id} />
        </section>
    )
}
