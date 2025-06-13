'use client'

import AccountMenu from '@/modules/shared/components/AccountMenu'
import Logo from '@/modules/shared/components/Logo'
import { fontPrimary } from '@/modules/shared/lib/fonts/fonts'
import { eventsRoute, reportsRoute } from '@/modules/shared/routes/routes'
import { Button } from '@/modules/ui/button'
import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Menu } from 'lucide-react'
import { createClient } from '@/modules/auth/lib/supabase/client'

export default function Navbar() {
    const [links, setLinks] = useState([
        {
            label: 'Events',
            route: eventsRoute
        }
    ])

    const supabase = createClient()

    useEffect(() => {
        supabase.auth.getUser().then((user) => {
            const supabaseUser = user.data.user
            if (supabaseUser && supabaseUser.user_metadata.role === 'admin') {
                
                const newLinks = links
                newLinks.push({
                    label: 'Reports',
                    route: reportsRoute
                })
                setLinks(newLinks)
            }
        })
    }, [])

    const pathname = usePathname()
    const [mobileOpen, setMobileOpen] = useState(false)

    return (
        <nav
            className={clsx(
                'px-4 md:px-8 py-2 flex justify-between bg-primary items-center w-screen',
                fontPrimary.className
            )}
        >
            <div className="flex gap-2 items-center">
                <Logo />
                <h1 className="text-2xl md:text-3xl font-bold text-white">
                    ViveMedellín
                </h1>
            </div>
            {/* Desktop menu */}
            <div className="hidden md:flex gap-1 items-center">
                <ul className="flex gap-2 mr-4">
                    {links.map((link) => (
                        <Link href={link.route} key={link.route}>
                            <Button
                                variant="ghost"
                                className={clsx(
                                    'text-white text-lg cursor-pointer w-fit px-0',
                                    pathname === link.route
                                        ? 'text-white'
                                        : 'text-white/60'
                                )}
                            >
                                {link.label}
                            </Button>
                        </Link>
                    ))}
                </ul>
                <AccountMenu />
            </div>
            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
                <button
                    aria-label="Open menu"
                    onClick={() => setMobileOpen((v) => !v)}
                    className="text-white"
                >
                    <Menu size={28} />
                </button>
            </div>
            {/* Mobile menu drawer */}
            {mobileOpen && (
                <div className="fixed inset-0 z-50 bg-black/60 flex flex-col">
                    <div className="bg-primary p-4 flex flex-col gap-4 w-3/4 max-w-xs h-full">
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex gap-2 items-center">
                                <Logo />
                                <h1 className="text-2xl font-bold text-white">
                                    ViveMedellín
                                </h1>
                            </div>
                            <button
                                aria-label="Close menu"
                                onClick={() => setMobileOpen(false)}
                                className="text-white text-2xl"
                            >
                                ×
                            </button>
                        </div>
                        <ul className="flex flex-col gap-2">
                            {links.map((link) => (
                                <Link
                                    href={link.route}
                                    key={link.route}
                                    onClick={() => setMobileOpen(false)}
                                >
                                    <Button
                                        variant="ghost"
                                        className={clsx(
                                            'text-white text-lg w-full justify-start',
                                            pathname === link.route
                                                ? 'text-white'
                                                : 'text-white/60'
                                        )}
                                    >
                                        {link.label}
                                    </Button>
                                </Link>
                            ))}
                        </ul>
                        <div className="mt-auto">
                            <AccountMenu />
                        </div>
                    </div>
                    {/* Click outside to close */}
                    <div
                        className="flex-1"
                        onClick={() => setMobileOpen(false)}
                    />
                </div>
            )}
        </nav>
    )
}
