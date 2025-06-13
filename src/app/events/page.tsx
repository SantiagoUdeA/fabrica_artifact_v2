import SectionTitle from '@/modules/shared/components/SectionTitle'
import { Suspense } from 'react'
import EventCardSkeleton from '@/modules/events/components/EventCardSkeleton'
import AsyncEventsList from '@/modules/events/components/AsyncEventList'

export default async function EventsPage() {
    return (
        <>
            <section>
                <SectionTitle>Events</SectionTitle>
                <div className="grid sm:grid-cols-2 gap-6">
                    <Suspense
                        fallback={
                            <>
                                {Array.from({ length: 6 }).map((_, index) => (
                                    <EventCardSkeleton key={index} />
                                ))}
                            </>
                        }
                    >
                        <AsyncEventsList />
                    </Suspense>
                </div>
            </section>
        </>
    )
}
