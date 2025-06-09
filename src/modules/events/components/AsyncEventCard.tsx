import EventCard from '@/modules/events/components/EventCard'
import { fetchSingleEvent } from '@/modules/events/lib/event.actions'

export default async function AsyncEventCard({
    eventId,
    className
}: {
    eventId: string
    className?: string
}) {
    const event = await fetchSingleEvent(eventId)
    return <EventCard event={event} className={className} />
}
