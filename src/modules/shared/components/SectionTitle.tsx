import clsx from 'clsx'
import { ReactNode } from 'react'

export default function SectionTitle({
    children,
    className
}: {
    children: ReactNode
    className?: string
}) {
    return <h1 className={clsx('text-2xl mb-4 font-bold', className)}>{children}</h1>
}
