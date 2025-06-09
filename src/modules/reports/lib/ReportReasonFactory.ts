import { ReportReason } from './report.definitions'

export class ReportReasonFactory {
    static createReason(label: string): ReportReason {
        switch (label) {
            case 'SPAM':
                return ReportReason.SPAM
            case 'OFFENSIVE':
                return ReportReason.OFFENSIVE
            case 'INAPPROPRIATE':
                return ReportReason.INAPPROPRIATE
            case 'PERSONAL_INFORMATION':
                return ReportReason.PERSONAL_INFORMATION
            case 'ADVERTISING':
                return ReportReason.ADVERTISING
            default:
                throw new Error('Invalid report reason')
        }
    }
}
