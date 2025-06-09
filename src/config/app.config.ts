import { z } from 'zod'

const envSchema = z.object({
    API_ROUTE: z.string().url()
})

const parsed = envSchema.safeParse(process.env)

if (parsed.error) {
    throw new Error(
        '❌ Invalid environment variables: ' +
            JSON.stringify(parsed.error.format())
    )
}

export const appConfig = parsed.data
