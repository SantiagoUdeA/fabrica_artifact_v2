'use client'

import AccountMenu from '@/modules/shared/components/AccountMenu'
import Logo from '@/modules/shared/components/Logo'
import { fontPrimary } from '@/modules/shared/lib/fonts/fonts'
import clsx from 'clsx'

export default function Navbar() {
    return (
        <nav
            className={clsx("px-8 py-2 flex justify-between bg-primary items-center w-screen", fontPrimary.className)}
        >
            <div className="flex gap-2 items-center">
                <Logo />
                <h1 className="text-3xl font-bold text-white">ViveMedellín</h1>
            </div>
            <AccountMenu />
        </nav>
    )
}
