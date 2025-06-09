import { Event } from '@/modules/events/lib/event.definitions'
import { Review } from '@/modules/reviews/lib/review.definitions';
import { getGraphQLClient } from '@/modules/shared/lib/graphql/client'
import { gql } from 'graphql-request'

export async function createReview(
    eventId: Event['id'],
    data: { rating: number; comment?: string }
): Promise<void> {
    const client = await getGraphQLClient()    
    const createReviewMutation = gql`
        mutation CreateReview($eventId: String!, $rating: Int!, $comment: String) {
            createReview(
                eventId: $eventId
                rating: $rating
                comment: $comment
            ) {
                id
            }
        }
    `

    const variables = {
        eventId,
        rating: data.rating,
        comment: data.comment ?? null
    }

    await client.request<{ createReview: Promise<void> }>(
        createReviewMutation,
        variables
    )
}

export async function updateReviewMutation(
    reviewId: Review["id"],
    data: { rating?: number; comment?: string }
): Promise<void> {
    const client = await getGraphQLClient()
    const updateReviewMutation = gql`
        mutation UpdateReview($reviewId: Int!, $rating: Int, $comment: String) {
            updateReview(
                reviewId: $reviewId
                rating: $rating
                comment: $comment
            ) {
                id
                rating
                comment
                createdAt
                updatedAt
            }
        }
    `
    const variables = {
        reviewId,
        ...data
    }

    await client.request<{
        updateReview: Promise<void>
    }>(updateReviewMutation, variables)
}

export async function deleteReviewMutation(
    reviewId: Review["id"]
): Promise<void> {
    const client = await getGraphQLClient()
    const deleteReviewMutation = gql`
        mutation DeleteReview($reviewId: Int!) {
            deleteReview(reviewId: $reviewId) {
                id
                rating
                comment
                createdAt
                updatedAt
            }
        }
    `
    const variables = { reviewId }

    await client.request<{ deleteReview: Promise<void> }>(
        deleteReviewMutation,
        variables
    )
}