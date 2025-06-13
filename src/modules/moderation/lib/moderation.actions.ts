'use server'

import { Review } from '@/modules/reviews/lib/review.definitions'
import {
    deleteReviewModerationMutation,
    updateReviewModerationMutation
} from './moderation.mutations'
import { revalidatePath } from 'next/cache'
import { reportsRoute } from '@/modules/shared/routes/routes'

export async function deleteReviewModeration(
    reviewId: Review['id']
): Promise<void> {
    await deleteReviewModerationMutation(reviewId)
    revalidatePath(reportsRoute)
}

export async function updateReviewModeration(
    reviewId: Review['id'],
    comment: string
): Promise<void> {
    await updateReviewModerationMutation(reviewId, comment)
    revalidatePath(reportsRoute)
}
