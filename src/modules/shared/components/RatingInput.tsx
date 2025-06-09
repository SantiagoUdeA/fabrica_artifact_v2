import { useState } from 'react'
import { Star } from 'lucide-react'

export default function RatingInput({
    value,
    onChange,
    defaultValue = 0
}: {
    value: number
    onChange: (rating: number) => void
    defaultValue?: number
}) {
    const [hoveredRating, setHoveredRating] = useState(0)
    const totalStars = 5

    const handleRating = (rating: number) => {
        onChange(rating)
    }

    return (
        <div className="flex gap-1 items-center">
            {new Array(totalStars).fill(0).map((_, index) => (
                <Star
                    key={index}
                    fill={index < (hoveredRating || value || defaultValue) ? '#ffd700' : '#d3d3d3'}
                    stroke={index < (hoveredRating || value || defaultValue) ? '#ffd700' : '#d3d3d3'}
                    size="1rem"
                    onClick={() => handleRating(index + 1)}
                    onMouseEnter={() => setHoveredRating(index + 1)}
                    onMouseLeave={() => setHoveredRating(0)}
                    className="cursor-pointer"
                />
            ))}
        </div>
    )
}
