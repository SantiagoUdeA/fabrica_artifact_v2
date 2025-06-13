'use client'

import { updateReviewModeration } from '@/modules/moderation/lib/moderation.actions'
import { Review } from '@/modules/reviews/lib/review.definitions'
import { Button } from '@/modules/ui/button'
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from '@/modules/ui/dialog'
import { Textarea } from '@/modules/ui/textarea'
import { Pencil } from 'lucide-react'
import { useState } from 'react'
import { toast } from 'sonner'

export default function UpdateReviewModerationDialog({
    reviewId,
    defaultValue
}: {
    reviewId: Review['id']
    defaultValue: string
}) {
    const [value, setValue] = useState(defaultValue)
    const handleSaveChanges = () => {
        toast.promise(
            updateReviewModeration(reviewId, value),
            {
            loading: 'Updating review...',
            success: 'Review updated!',
            error: 'Failed to update review.',
            }
        )
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="default">
                    <Pencil />
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Update review</DialogTitle>
                    <DialogDescription>
                        Edit the review comment below and save your changes.
                    </DialogDescription>
                </DialogHeader>
                <Textarea
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
                <DialogFooter>
                    <DialogClose asChild>
                        <Button variant='ghost'>Cancel</Button>
                    </DialogClose>
                    <Button onClick={handleSaveChanges}>Save changes</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
