"use client"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/modules/ui/select"

export default function ReportReasonSelect({
    value,
    onChange,
    className
}: {
    value: string
    onChange: (value: string) => void
    className?: string
}) {
    return (
        <Select
            value={value}
            onValueChange={(value) => onChange(value)}
            aria-label="Report reason"
        >
            <SelectTrigger className={`w-full p-2 border rounded ${className}`}>
                <SelectValue placeholder="Select a reason" />
            </SelectTrigger>
            <SelectContent className="p-2">
                <SelectItem value="SPAM">Spam</SelectItem>
                <SelectItem value="OFFENSIVE">Offensive</SelectItem>
                <SelectItem value="INAPPROPRIATE">Inappropriate</SelectItem>
                <SelectItem value="PERSONAL_INFORMATION">Personal information</SelectItem>
                <SelectItem value="ADVERTISING">Advertising</SelectItem>
            </SelectContent>
        </Select>
    )
}