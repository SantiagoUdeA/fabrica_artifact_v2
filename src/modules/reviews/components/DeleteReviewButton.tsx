'use client'

import { useState } from 'react'
import { Event } from '@/modules/events/lib/event.definitions'
import { deleteReview } from '@/modules/reviews/lib/review.actions'
import { Review } from '@/modules/reviews/lib/review.definitions'
import AssertDelete from '@/modules/shared/components/AssertDelete'
import { toast } from 'sonner'

export default function DeleteReviewButton({
    reviewId,
    eventId
}: {
    reviewId: Review['id']
    eventId: Event['id']
}) {
    const [loading, setLoading] = useState(false)

    const onDelete = async () => {
        setLoading(true)
        try {
            await toast.promise(deleteReview(eventId, reviewId), {
                loading: 'Deleting review...',
                success: 'Review deleted successfully!',
                error: 'Failed to delete review.'
            }).unwrap()
        } finally {
            setLoading(false)
        }
    }

    return (
        <AssertDelete
            title="Delete review"
            description="Are you sure you want to delete your review? This action can not be undone."
            onDelete={onDelete}
            disabled={loading}
        />
    )
}
