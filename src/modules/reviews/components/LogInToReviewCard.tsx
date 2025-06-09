'use client'

import { Info, LogIn } from 'lucide-react'
import Link from 'next/link'
import clsx from 'clsx'
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardFooter
} from '@/modules/ui/card'
import { Button } from '@/modules/ui/button'

export default function LogInToReviewCard({
    className
}: {
    className?: string
}) {
    return (
        <Card className={clsx(className, 'h-full')}>
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <Info />
                    Log in to write a review
                </CardTitle>
                <CardDescription>
                    You need to be signed in to leave a review for this event.
                </CardDescription>
            </CardHeader>
            <CardFooter>
                <Link
                    href={'/auth/login'}
                    className="flex gap-1 items-center w-full"
                    onClick={() => {
                        if (typeof window !== 'undefined') {
                            localStorage.setItem(
                                'redirectAfterLogin',
                                window.location.pathname +
                                    window.location.search
                            )
                        }
                    }}
                >
                    <Button variant="outline" className="w-full">
                        <LogIn />
                        Log in
                    </Button>
                </Link>
            </CardFooter>
        </Card>
    )
}
