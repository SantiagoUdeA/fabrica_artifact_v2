import { Event } from '@/modules/events/lib/event.definitions'
import { getGraphQLClient } from '@/modules/shared/lib/graphql/client'
import { gql } from 'graphql-request'

export async function allEvents(): Promise<Event[]> {
    const client = await getGraphQLClient()
    const allEventsQuery = gql`
        query AllEvents {
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
    return data.allEvents
}
