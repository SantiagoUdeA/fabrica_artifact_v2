'use server'

import { ReportReason } from '@/modules/reports/lib/report.definitions'
import { createReportMutation } from '@/modules/reports/lib/report.mutations'

export async function createReport(
    reviewId: string,
    reportReason: ReportReason
): Promise<void> {
    await createReportMutation(reviewId, reportReason)
}
