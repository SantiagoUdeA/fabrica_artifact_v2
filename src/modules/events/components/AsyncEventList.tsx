import { fetchEvents } from '@/modules/events/lib/event.actions'
import EventCard from '@/modules/events/components/EventCard'
import Link from 'next/link'
import { singleEventRoute } from '@/modules/shared/routes/routes'

export default async function AsyncEventsList() {
    const events = await fetchEvents()
    return (
        <>
            {events.map((event) => (
                <Link href={singleEventRoute(event.id)} key={event.id}>
                    <EventCard event={event} clickable className="h-full" />
                </Link>
            ))}
        </>
    )
}
