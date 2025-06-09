import { ReportReason } from "@/modules/reports/lib/report.definitions";

export async function createReportMutation(
    reviewId: string,
    reportReason: ReportReason
) {
    const { getGraphQLClient } = await import('@/modules/shared/lib/graphql/client');
    const { gql } = await import('graphql-request');

    const client = await getGraphQLClient();
    const createReportMutation = gql`
        mutation CreateReport($reviewId: Int!, $reason: ReportReason!) {
            createReport(input: { reviewId: $reviewId, reason: $reason }) {
                id
                reason
                createdAt
            }
        }
    `;

    const variables = {
        reviewId,
        reason: reportReason
    };

    await client.request(createReportMutation, variables);
}
