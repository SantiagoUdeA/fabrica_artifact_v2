'use client'

import { createClient } from '@/modules/auth/lib/supabase/client'
import { useRouter } from 'next/navigation'
import { Button } from '@/modules/ui/button'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger
} from '@/modules/ui/dropdown-menu'
import { User as UserIcon } from 'lucide-react'
import { User } from '@supabase/supabase-js'
import { useEffect, useState } from 'react'
import { Skeleton } from '@/modules/ui/skeleton'

export default function AccountMenu() {
    const router = useRouter()
    const supabase = createClient()
    const [user, setUser] = useState<User>()

    const logout = async () => {
        await supabase.auth.signOut()
        router.push('/auth/login')
    }

    useEffect(() => {
        supabase.auth.getUser().then((user) => {
            const supabaseUser = user.data.user
            if (supabaseUser) setUser(supabaseUser)
        })
    }, [])

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button className="rounded-full" variant='outline'>
                    <UserIcon />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>
                    {user ? (
                        user.email
                    ) : (
                        <Skeleton className="h-4 w-full" />
                    )}
                </DropdownMenuLabel>
                <DropdownMenuItem onClick={() => logout()}>
                    Logout
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
