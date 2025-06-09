import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
} from '@/modules/ui/card'
import { Event } from '@/modules/events/lib/event.definitions'
import { Calendar, Clock, Pin, Star } from 'lucide-react'
import AverageRating from '@/modules/events/components/AverageRating'
import clsx from 'clsx'
import { formatDate, formatHour } from '@/modules/shared/lib/utils/format-date'

export default function EventCard({
    event,
    clickable,
    className
}: {
    event: Event
    clickable?: boolean
    className?: string
}) {
    return (
        <Card
            className={clsx(
                clickable
                    ? 'border-2 border-solid border-transparent hover:border-primary cursor-pointer transition-colors ease-out hover:ease-in duration-100'
                    : '',
                className
            )}
        >
            <CardHeader>
                <AverageRating
                    averageRating={event.averageRating}
                    totalReviews={event.totalReviews}
                />
                <CardTitle className="mt-4">{event.title}</CardTitle>
                <CardDescription>{event.description}</CardDescription>
            </CardHeader>
            <CardContent className="[&>div]:mt-1">
                <div className="flex gap-2 !mt-0">
                    <Calendar /> {formatDate(event.date)}
                </div>
                <div className="flex gap-2">
                    <Clock /> {formatHour(event.date)}
                </div>
                <div className="flex gap-2">
                    <Pin /> {event.location}
                </div>
            </CardContent>
        </Card>
    )
}
