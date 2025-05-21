import Navbar from '@/modules/shared/components/Navbar'
import { ReactNode } from 'react'

export default function EventsLayout({ children }: { children: ReactNode }) {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <main>{children}</main>
        </>
    )
}
