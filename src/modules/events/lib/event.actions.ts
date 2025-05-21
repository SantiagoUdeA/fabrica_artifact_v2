'use server'

import { Event } from '@/modules/events/lib/event.definitions'
import { allEvents } from '@/modules/events/lib/event.query'

export async function fetchEvents(): Promise<Event[]> {
    // TODO Error handler
    return await allEvents()
}
