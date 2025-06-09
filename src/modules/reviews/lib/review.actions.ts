'use server'

import { Event } from '@/modules/events/lib/event.definitions'
import { Review } from '@/modules/reviews/lib/review.definitions'
import {
    allReviewsByEventId,
    reviewByEventId
} from '@/modules/reviews/lib/review.query'
import { ReviewFormInput } from '@/modules/reviews/lib/review.schema'
import { createReview as createNewReview, deleteReviewMutation, updateReviewMutation } from '@/modules/reviews/lib/review.mutation'
import { revalidatePath } from 'next/cache'
import { eventsRoute } from '@/modules/shared/routes/routes'

export async function fetchReviewsByEventId(
    eventId: string
): Promise<Review[]> {
    return await allReviewsByEventId(eventId)
}

export async function fetchUserReviewInEvent(
    eventId: Event["id"]
): Promise<Review | null> {
    return await reviewByEventId(eventId)
}

export async function createReview(
    eventId: string,
    data: ReviewFormInput
): Promise<void> {
    await createNewReview(eventId, data)
    revalidatePath(`${eventsRoute}/${eventId}`)
}

export async function updateReview(
    eventId: Event['id'],
    reviewId: Review['id'],
    data: ReviewFormInput
): Promise<void> {
    await updateReviewMutation(reviewId, data)
    revalidatePath(`${eventsRoute}/${eventId}`)
}

export async function deleteReview(
    eventId: Event['id'],
    reviewId: Review['id']
): Promise<void> {
    await deleteReviewMutation(reviewId)
    revalidatePath(`${eventsRoute}/${eventId}`)
}
