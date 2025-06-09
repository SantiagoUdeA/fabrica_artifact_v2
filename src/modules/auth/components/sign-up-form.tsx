'use client'

import { cn } from '@/modules/ui/utils'
import { createClient } from '@/modules/auth/lib/supabase/client'
import { Button } from '@/modules/ui/button'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
} from '@/modules/ui/card'
import { Input } from '@/modules/ui/input'
import { Label } from '@/modules/ui/label'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { eventsRoute } from '@/modules/shared/routes/routes'
import { getRedirectPath } from '@/modules/shared/lib/utils/last-route'

export function SignUpForm({
    className,
    ...props
}: React.ComponentPropsWithoutRef<'div'>) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [repeatPassword, setRepeatPassword] = useState('')
    const [error, setError] = useState<string | null>(null)
    const [isLoading, setIsLoading] = useState(false)
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const router = useRouter()

    const handleSignUp = async (e: React.FormEvent) => {
        e.preventDefault()
        const supabase = createClient()
        setIsLoading(true)
        setError(null)

        const nameRegex = /^[A-Za-zÀ-ÿ\s'-]{2,}$/

        if (!firstName || !lastName) {
            setError('First name and last name are required')
            setIsLoading(false)
            return
        }
        if (!nameRegex.test(firstName)) {
            setError(
                'First name must be at least 2 letters and only contain letters'
            )
            setIsLoading(false)
            return
        }
        if (!nameRegex.test(lastName)) {
            setError(
                'Last name must be at least 2 letters and only contain letters'
            )
            setIsLoading(false)
            return
        }
        if (password !== repeatPassword) {
            setError('Passwords do not match')
            setIsLoading(false)
            return
        }

        try {
            const { error } = await supabase.auth.signUp({
                email,
                password,
                options: {
                    emailRedirectTo: getRedirectPath(),
                    data: {
                        firstName,
                        lastName
                    }
                }
            })
            if (error) throw error
            router.push('/events')
        } catch (error: unknown) {
            setError(
                error instanceof Error ? error.message : 'An error occurred'
            )
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className={cn('flex flex-col gap-6', className)} {...props}>
            <Card>
                <CardHeader>
                    <CardTitle className="text-2xl">Sign up</CardTitle>
                    <CardDescription>Create a new account</CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSignUp}>
                        <div className="flex flex-col gap-6">
                            <div className="grid gap-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="m@example.com"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="grid gap-2">
                                <div className="flex items-center">
                                    <Label htmlFor="password">Password</Label>
                                </div>
                                <Input
                                    id="password"
                                    type="password"
                                    required
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                />
                            </div>
                            <div className="grid gap-2">
                                <div className="flex items-center">
                                    <Label htmlFor="repeat-password">
                                        Repeat Password
                                    </Label>
                                </div>
                                <Input
                                    id="repeat-password"
                                    type="password"
                                    required
                                    value={repeatPassword}
                                    onChange={(e) =>
                                        setRepeatPassword(e.target.value)
                                    }
                                />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="first-name">First Name</Label>
                                <Input
                                    id="first-name"
                                    type="text"
                                    required
                                    minLength={2}
                                    pattern="[A-Za-zÀ-ÿ\s'-]+"
                                    value={firstName}
                                    onChange={(e) =>
                                        setFirstName(e.target.value)
                                    }
                                    placeholder="John"
                                />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="last-name">Last Name</Label>
                                <Input
                                    id="last-name"
                                    type="text"
                                    required
                                    minLength={2}
                                    pattern="[A-Za-zÀ-ÿ\s'-]+"
                                    value={lastName}
                                    onChange={(e) =>
                                        setLastName(e.target.value)
                                    }
                                    placeholder="Doe"
                                />
                            </div>
                            {error && (
                                <p className="text-sm text-red-500">{error}</p>
                            )}
                            <Button
                                type="submit"
                                className="w-full"
                                disabled={isLoading}
                            >
                                {isLoading
                                    ? 'Creating an account...'
                                    : 'Sign up'}
                            </Button>
                        </div>
                        <div className="mt-4 text-center text-sm">
                            Already have an account?{' '}
                            <Link
                                href="/auth/login"
                                className="underline underline-offset-4"
                            >
                                Login
                            </Link>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}
