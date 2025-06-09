import { fontPrimary } from '@/modules/shared/lib/fonts/fonts'
import { Button } from '@/modules/ui/button'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
    return (
        <section className="w-full h-screen max-w-screen overflow-hidden">
            <div className="m-auto w-fit my-auto flex gap-4 flex-wrap md:flex-nowrap pt-16 md:pt-0">
                <div className='flex flex-col justify-center'>
                    <hgroup className="mb-6">
                        <h2 className={clsx("text-5xl font-bold mb-2 text-accent font-bol text-balance", fontPrimary.className)}>
                            Real Reviews, Smarter Decisions
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-xl">
                            See what past attendees have to say before choosing
                            your next event. Our rating and review system helps
                            users make informed decisions and gives organizers
                            valuable feedback to improve future experiences.
                        </p>
                    </hgroup>
                    <Link href="/events">
                        <Button size="lg" className="mt-4" variant="secondary">
                            Browse Reviewed Events
                        </Button>
                    </Link>
                </div>
                <div className='overflow-hidden'>
                    <Image
                        src="/hero.webp"
                        width={1024}
                        height={1024}
                        alt='Two girls rating events'
                        className='object-center object-contain'
                    />
                </div>
            </div>
        </section>
    )
}
