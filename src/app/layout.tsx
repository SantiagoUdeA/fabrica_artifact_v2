import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/modules/shared/components/Navbar'
import { Toaster } from 'sonner'
import { fontSecondary } from '@/modules/shared/lib/fonts/fonts'

export const metadata: Metadata = {
    title: 'ViveMedellin',
    description: 'Aplicación para conocer lugares y eventos en Medellín'
}

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className={`${fontSecondary.className} antialiased`}>
                <header>
                    <Navbar />
                </header>
                <main className='max-w-[1500px] mx-auto mt-4 px-4 md:px-8'>{children}</main>
                <Toaster />
            </body>
        </html>
    )
}
