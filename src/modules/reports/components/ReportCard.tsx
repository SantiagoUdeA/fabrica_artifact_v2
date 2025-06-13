'use client'

import UpdateReviewModerationDialog from '@/modules/moderation/components/UpdateReviewModeration'
import { deleteReviewModeration } from '@/modules/moderation/lib/moderation.actions'
import { deleteReport } from '@/modules/reports/lib/report.actions'
import { Report } from '@/modules/reports/lib/report.definitions'
import ReviewCard from '@/modules/reviews/components/ReviewCard'
import AssertDelete from '@/modules/shared/components/AssertDelete'
import { Badge } from '@/modules/ui/badge'
import { Button } from '@/modules/ui/button'
import {
    Card,
    CardAction,
    CardContent,
    CardFooter,
    CardHeader
} from '@/modules/ui/card'

import { XIcon } from 'lucide-react'
import { useState } from 'react'
import { toast } from 'sonner'

export default function ReportCard({ report }: { report: Report }) {
    const [loadingDiscard, setLoadingDiscard] = useState(false)

    const handleDiscard = () => {
        toast
            .promise(
                () => {
                    setLoadingDiscard(true)
                    return deleteReport(report.id)
                },
                {
                    loading: 'Discarding report...',
                    success: 'Report discarded!',
                    error: 'Failed to discard report.'
                }
            )
            .unwrap()
            .finally(() => {
                setLoadingDiscard(false)
            })
    }

    const handleDelete = () => {
        toast.promise(deleteReviewModeration(report.review.id), {
            loading: 'Deleting review...',
            success: 'Review deleted!',
            error: 'Failed to delete review.'
        })
    }

    return (
        <Card>
            <CardHeader className="flex justify-between items-center">
                <Badge variant="outline">{report.reason}</Badge>
                <Button variant="outline" onClick={handleDiscard} disabled={loadingDiscard}>
                    <XIcon />
                </Button>
            </CardHeader>
            <CardContent>
                <ReviewCard review={report.review} />
            </CardContent>
            <CardFooter>
                <CardAction className="mr-2">
                    <UpdateReviewModerationDialog
                        defaultValue={report.review.comment}
                        reviewId={report.review.id}
                    />
                </CardAction>
                <CardAction>
                    <AssertDelete
                        title="Delete review"
                        description="This action can not be undone"
                        onDelete={handleDelete}
                        variant="secondary"
                    />
                </CardAction>
            </CardFooter>
        </Card>
    )
}
