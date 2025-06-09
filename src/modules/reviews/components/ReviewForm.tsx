'use client'

import { Event } from '@/modules/events/lib/event.definitions'
import {
    createReview,
    updateReview
} from '@/modules/reviews/lib/review.actions'
import { Review } from '@/modules/reviews/lib/review.definitions'
import {
    ReviewFormInput,
    ReviewSchema
} from '@/modules/reviews/lib/review.schema'
import RatingInput from '@/modules/shared/components/RatingInput'
import { Spinner } from '@/modules/shared/components/Spinner'
import { Button } from '@/modules/ui/button'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel
} from '@/modules/ui/form'
import { Textarea } from '@/modules/ui/textarea'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

export default function ReviewForm({
    eventId,
    edit,
    defaultValues
}: {
    eventId: Event['id']
    edit?: boolean
    defaultValues?: Review
}) {
    const [loading, setLoading] = useState(false)
    const form = useForm<ReviewFormInput>({
        resolver: zodResolver(ReviewSchema)
    })

    const onSubmit = async (data: ReviewFormInput) => {
        setLoading(true)
        try {
            if (edit) {
                if (defaultValues === undefined)
                    throw new Error('Invalid default values')
                await toast
                    .promise(updateReview(eventId, defaultValues.id, data), {
                        loading: 'Updating review...',
                        success: 'Review updated',
                        error: 'Failed to update review'
                    })
                    .unwrap()
            } else {
                await toast
                    .promise(createReview(eventId, data), {
                        loading: 'Creating review...',
                        success: 'Review created',
                        error: 'Failed to create review'
                    })
                    .unwrap()
            }
        } finally {
            setLoading(false)
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <FormField
                    control={form.control}
                    name="rating"
                    defaultValue={defaultValues?.rating}
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Rating</FormLabel>
                            <FormControl>
                                <RatingInput
                                    {...field}
                                    defaultValue={defaultValues?.rating}
                                />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="comment"
                    render={({ field }) => (
                        <FormItem className="mt-4">
                            <FormLabel>Comment (Optional)</FormLabel>
                            <FormControl>
                                <Textarea
                                    placeholder="Enter your comment"
                                    defaultValue={defaultValues?.comment}
                                    {...field}
                                />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <Button
                    type="submit"
                    className="mt-4 w-full"
                    disabled={loading}
                >
                    Submit
                </Button>
            </form>
        </Form>
    )
}
