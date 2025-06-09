import { Review } from "@/modules/reviews/lib/review.definitions"

export enum ReportReason {
    SPAM = "SPAM",
    OFFENSIVE = "OFFENSIVE",
    INAPPROPRIATE = "INAPPROPRIATE",
    PERSONAL_INFORMATION = "PERSONAL_INFORMATION",
    ADVERTISING = "ADVERTISING"
}

export type Report = {
    id: number
    review: Review
    reason: ReportReason
}