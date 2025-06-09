export type Review = {
    id: string
    rating: number
    comment: string
    createdAt: Date
    updatedAt: Date
    user: {
        displayName: string
    }
}