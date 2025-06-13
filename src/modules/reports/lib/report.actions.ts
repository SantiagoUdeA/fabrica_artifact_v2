'use server'

import { Report, ReportReason } from '@/modules/reports/lib/report.definitions'
import {
    createReportMutation,
    deleteReportMutation
} from '@/modules/reports/lib/report.mutations'
import { allReports } from '@/modules/reports/lib/report.queries'
import { reportsRoute } from '@/modules/shared/routes/routes'
import { revalidatePath } from 'next/cache'

export async function createReport(
    reviewId: string,
    reportReason: ReportReason
): Promise<void> {
    await createReportMutation(reviewId, reportReason)
}

export async function getAllRerports(): Promise<Report[]> {
    return await allReports()
}

export async function deleteReport(reportId: Report['id']) {
    await deleteReportMutation(reportId)
    revalidatePath(reportsRoute)
}
