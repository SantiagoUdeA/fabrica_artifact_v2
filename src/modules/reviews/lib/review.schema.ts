import z from "zod"

export const ReviewSchema = z.object({
    comment: z.string().optional(),
    rating: z.number().min(1).max(5).int()
})

export type ReviewFormInput = z.infer<typeof ReviewSchema>
