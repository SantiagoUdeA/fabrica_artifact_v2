import AccountMenu from '@/modules/shared/components/AccountMenu'

export default function Navbar() {

    return (
        <nav className="px-4 py-2 flex justify-between bg-orange-400">
            <h1 className="text-2xl font-bold text-white">ViveMedellín</h1>
            <AccountMenu />
        </nav>
    )
}
