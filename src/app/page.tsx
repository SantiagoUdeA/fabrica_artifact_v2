import { Button } from '@/modules/ui/button'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
    return (
        <section className="w-screen h-screen p-4 flex flex-col justify-center items-center">
            <hgroup>
                <p className="text-sm">Welcome to</p>
                <h1 className="text-5xl">ViveMedellín</h1>
            </hgroup>
            <p>Enjoy Medellín like your never did!</p>
            <div className="flex gap-2">
                <Link href={'auth/sign-up'}>
                    <Button>Sign up</Button>
                </Link>
                <Link href={'auth/login'}>
                    <Button variant="secondary">Sign in</Button>
                </Link>
            </div>
        </section>
    )
}
