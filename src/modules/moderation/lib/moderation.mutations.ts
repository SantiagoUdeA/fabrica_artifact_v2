import { Review } from '@/modules/reviews/lib/review.definitions'
import { getGraphQLClient } from '@/modules/shared/lib/graphql/client'
import { gql } from 'graphql-request'

export async function deleteReviewModerationMutation(
    reviewId: Review["id"]
): Promise<Review> {
    const client = await getGraphQLClient()
    const deleteReviewModerationMutation = gql`
        mutation DeleteReviewModeration($reviewId: Int!) {
            deleteReviewModeration(reviewId: $reviewId) {
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

    const variables = { reviewId: Number(reviewId) }

    const response = await client.request<{ deleteReviewModeration: Review }>(
        deleteReviewModerationMutation,
        variables
    )

    return response.deleteReviewModeration
}

export async function updateReviewModerationMutation(reviewId: Review["id"], comment: string): Promise<Review>{

    const client = await getGraphQLClient()
    const updateReviewModerationMutation = gql`
        mutation UpdateReviewModeration($reviewId: Int!, $comment: String!) {
            updateReviewModeration(
                input: { reviewId: $reviewId, comment: $comment }
            ) {
                id
                rating
                comment
                createdAt
                updatedAt
            }
        }
    `

    const variables = { reviewId: Number(reviewId), comment }

    const response = await client.request<{ updateReviewModeration: Review }>(
        updateReviewModerationMutation,
        variables
    )

    return response.updateReviewModeration
}