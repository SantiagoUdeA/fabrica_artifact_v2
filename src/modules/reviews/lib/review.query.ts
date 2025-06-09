import { Review } from '@/modules/reviews/lib/review.definitions'
import { getGraphQLClient } from '@/modules/shared/lib/graphql/client'
import { gql } from 'graphql-request'

export async function allReviewsByEventId(eventId: string): Promise<Review[]> {
    const client = await getGraphQLClient()
    const reviewsByEventIdQuery = gql`
        query GetReviews{
            allReviewsByEventId(eventId: ${eventId}){
                id
                rating
                comment
                createdAt
                updatedAt
                user {
                    displayName
                }
            }
        }
    `
    const data = await client.request<{
        allReviewsByEventId: Promise<Review[]>
    }>(reviewsByEventIdQuery)
    return (await data.allReviewsByEventId).map((review) => {
        const { createdAt, updatedAt, ...reviewData } = review
        return {
            ...reviewData,
            createdAt: new Date(createdAt),
            updatedAt: new Date(updatedAt)
        }
    })
}

export async function reviewByEventId(eventId: string): Promise<Review | null> {
    const client = await getGraphQLClient()
    const reviewByEventIdQuery = gql`
        query GetReviewByUserAndEvent {
            reviewByEventId(eventId: ${eventId}) {
                id
                rating
                comment
                createdAt
                updatedAt
                user{
                    displayName
                }
            }
        }
    `
    const data = await client.request<{
        reviewByEventId: Review | null
    }>(reviewByEventIdQuery)

    if (!data.reviewByEventId) {
        return null
    }

    const { createdAt, updatedAt, ...reviewData } = data.reviewByEventId

    return {
        ...reviewData,
        createdAt: new Date(createdAt),
        updatedAt: new Date(updatedAt)
    }
}
