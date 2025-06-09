import { Star } from 'lucide-react'

export default function Rating({ rating }: { rating: number }) {
    const totalStars = 5

    return (
        <div className='flex gap-1 items-center'>
            {new Array(totalStars).fill(0).map((_, index) => (
                <Star
                    key={index}
                    fill={index < Math.floor(rating) ? '#ffd700' : '#d3d3d3'}
                    stroke={index < Math.floor(rating) ? '#ffd700' : '#d3d3d3'}
                    size="1rem"
                />
            ))}
        </div>
    )
}
