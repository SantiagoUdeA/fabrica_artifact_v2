'use client'

import AccountMenu from '@/modules/shared/components/AccountMenu'
import Logo from '@/modules/shared/components/Logo'
import { fontPrimary } from '@/modules/shared/lib/fonts/fonts'
import { eventsRoute } from '@/modules/shared/routes/routes'
import { Button } from '@/modules/ui/button'
import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
    const links = [
        {
            label: 'Events',
            route: eventsRoute
        }
    ]

    const pathname = usePathname()

    return (
        <nav
            className={clsx(
                'px-8 py-2 flex justify-between bg-primary items-center w-screen',
                fontPrimary.className
            )}
        >
            <div className="flex gap-2 items-center">
                <Logo />
                <h1 className="text-3xl font-bold text-white">ViveMedellín</h1>
            </div>
            <div className="flex gap-1">
                <ul className="flex gap-2 mr-4">
                    {links.map((link) => (
                        <Link href={link.route}>
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
        </nav>
    )
}
