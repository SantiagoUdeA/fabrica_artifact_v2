import { fetchEvents } from '@/modules/events/lib/event.actions'
import EventCard from '@/modules/events/components/EventCard'

export default async function EventsPage() {
    const events = await fetchEvents()

    return (
        <>
            <section className="p-4">
                <h1 className="text-4xl mb-4">Events</h1>
                <div className="grid grid-cols-2 gap-2">
                    {events.map((event) => (
                        <EventCard event={event} key={event.id} />
                    ))}
                </div>
            </section>
        </>
    )
}
