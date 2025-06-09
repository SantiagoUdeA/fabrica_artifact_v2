import { appConfig } from '@/config/app.config'

export const eventsRoute = '/events'

export const singleEventRoute = (eventId: string) => `${eventsRoute}/${eventId}`
