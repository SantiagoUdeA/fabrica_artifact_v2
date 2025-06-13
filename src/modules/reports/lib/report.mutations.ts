import { Report, ReportReason } from '@/modules/reports/lib/report.definitions'
const { getGraphQLClient } = await import('@/modules/shared/lib/graphql/client')

export async function createReportMutation(
    reviewId: string,
    reportReason: ReportReason
) {
    const { gql } = await import('graphql-request')

    const client = await getGraphQLClient()
    const createReportMutation = gql`
        mutation CreateReport($reviewId: Int!, $reason: ReportReason!) {
            createReport(input: { reviewId: $reviewId, reason: $reason }) {
                id
                reason
                createdAt
            }
        }
    `

    const variables = {
        reviewId,
        reason: reportReason
    }

    await client.request(createReportMutation, variables)
}

export async function deleteReportMutation(reportId: Report['id']) {
    const { gql } = await import('graphql-request')

    const client = await getGraphQLClient()
    const deleteReportMutation = gql`
        mutation DeleteReport($reportId: ID!) {
            deleteReport(reportId: $reportId) {
                id
                reason
                createdAt
                review {
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
        }
    `

    const variables = {
        reportId: reportId.toString()
    }

    await client.request(deleteReportMutation, variables)
}
