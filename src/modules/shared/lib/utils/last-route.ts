import { eventsRoute } from "@/modules/shared/routes/routes"

export function getRedirectPath(defaultPath: string = eventsRoute): string {
    let redirectPath = defaultPath
    if (typeof window !== 'undefined') {
        const stored = localStorage.getItem('redirectAfterLogin')
        if (stored) {
            redirectPath = stored
            localStorage.removeItem('redirectAfterLogin')
        }
    }
    return redirectPath
}
