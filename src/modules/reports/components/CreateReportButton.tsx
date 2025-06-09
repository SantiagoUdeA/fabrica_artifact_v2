'use client'

import ReportReasonSelect from '@/modules/reports/components/ReportReasonSelect'
import { createReport } from '@/modules/reports/lib/report.actions'
import { ReportReasonFactory } from '@/modules/reports/lib/ReportReasonFactory'
import { Button } from '@/modules/ui/button'
import { Popover, PopoverContent, PopoverTrigger } from '@/modules/ui/popover'
import { Flag } from 'lucide-react'
import { useState } from 'react'
import { toast } from 'sonner'

export default function CreateReportButton({ reviewId }: { reviewId: string }) {
    const [reportReason, setReportReason] = useState('')

    const handleClick = () => {
        if (reportReason === '') {
            toast.error('Please select a report reason')
            return
        }
        toast.promise(
            createReport(
                reviewId,
                ReportReasonFactory.createReason(reportReason)
            ),
            {
                loading: 'Reporting',
                success: 'Report submitted',
                error: 'Failed to submit report'
            }
        )
    }

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button variant="ghost" size="lg">
                    <Flag />
                </Button>
            </PopoverTrigger>
            <PopoverContent>
                <span className="font-bold block mb-2">Report comentary</span>
                <ReportReasonSelect
                    value={reportReason}
                    onChange={setReportReason}
                />
                <Button className="w-full mt-2" onClick={handleClick}>
                    Report
                </Button>
            </PopoverContent>
        </Popover>
    )
}
