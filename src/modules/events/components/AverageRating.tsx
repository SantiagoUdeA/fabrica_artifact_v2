import Rating from '@/modules/shared/components/Rating'
import { MessageCircle, Star } from 'lucide-react'

export default function AverageRating({
    averageRating,
    totalReviews
}: {
    averageRating: number
    totalReviews: number
}) {
    return (
        <div className="flex gap-1 items-center">
            <Rating rating={averageRating} />
            <p>{averageRating.toFixed(1)}</p>
            <p className="ml-1 flex gap-2 items-center">
            <MessageCircle /> {totalReviews}
            </p>
        </div>
    )
}
