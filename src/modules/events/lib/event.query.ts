import { Event } from '@/modules/events/lib/event.definitions'
import { getGraphQLClient } from '@/modules/shared/lib/graphql/client'
import { gql } from 'graphql-request'

export async function allEvents(): Promise<Event[]> {
    const client = await getGraphQLClient()
    const allEventsQuery = gql`
        query {
            allEvents {
                id
                title
                description
                date
                location
                price
                totalReviews
                averageRating
            }
        }
    `
    const data = await client.request<{ allEvents: Event[] }>(allEventsQuery)
    return data.allEvents.map(event => {
        const { date, ...eventData } = event
        return {
            ...eventData,
            date: new Date(date)
        }
    })
}

export async function getEvent(eventId: string): Promise<Event> {
    const client = await getGraphQLClient()
    const singleEventQuery = gql`
        query SingleEvent($eventId: Int!) {
            event(eventId: $eventId) {
                id
                title
                description
                date
                location
                price
                totalReviews
                averageRating
            }
        }
    `

    const variables = { eventId: parseInt(eventId) }
    const data = await client.request<{ event: Event }>(
        singleEventQuery,
        variables
    )

    const { date, ...eventData } = data.event
    return {
        ...eventData,
        date: new Date(date)
    }
}
