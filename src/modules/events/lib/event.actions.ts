'use server'

import { Event } from '@/modules/events/lib/event.definitions'
import { allEvents, getEvent } from '@/modules/events/lib/event.query'

// TODO Error handler

export async function fetchEvents(): Promise<Event[]> {
    return await allEvents()
}

export async function fetchSingleEvent(eventId: string): Promise<Event>{
    return await getEvent(eventId)
}
