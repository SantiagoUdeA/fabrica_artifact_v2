import ReportCard from '@/modules/reports/components/ReportCard'
import { getAllRerports } from '@/modules/reports/lib/report.actions'
import { map } from 'zod'

export default async function ReportsList() {
    const reports = await getAllRerports()

    return (
        <ul className="grid grid-cols-2 gap-4 space-y-4">
            {reports.map((report) => (
                <li key={report.id}>
                    <ReportCard report={report} />
                </li>
            ))}
        </ul>
    )
}
