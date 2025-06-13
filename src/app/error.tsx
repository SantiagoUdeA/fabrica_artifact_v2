'use client'

import { fontPrimary, fontSecondary } from '@/modules/shared/lib/fonts/fonts'
import { Button } from '@/modules/ui/button'
import clsx from 'clsx'
import { useEffect } from 'react'

export default function Error({
    error,
    reset
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        // Optionally log the error to an error reporting service
        console.error(error)
    }, [error])

    return (
        <main className="mt-4 flex h-screen flex-col items-center justify-center text-center">
            <h2 className={clsx("text-5xl font-bold text-balance", fontPrimary.className)}>Something went wrong!</h2>
            <p className={clsx('text-pretty mt-4 max-w-[400px]', fontSecondary.className)}>{error.message}</p>
            <Button
                className="mt-4"
                size="lg"
                onClick={
                    // Attempt to recover by trying to re-render the invoices route
                    () => reset()
                }
            >
                Try again
            </Button>
        </main>
    )
}
