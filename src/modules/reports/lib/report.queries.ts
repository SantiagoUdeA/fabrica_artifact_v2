import { Report } from '@/modules/reports/lib/report.definitions'
import { getGraphQLClient } from '@/modules/shared/lib/graphql/client'
import { gql } from 'graphql-request'

export async function allReports(): Promise<Report[]> {
    const client = await getGraphQLClient()
    const allReportsQuery = gql`
        query AllReports {
            allReports {
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
        }`
    const data = await client.request<{ allReports: any[] }>(allReportsQuery)
    return data.allReports.map((report) => ({
        ...report,
        createdAt: new Date(report.createdAt)
    }))
}
