import { appConfig } from '@/config/app.config'
import { createClient } from '@/modules/auth/lib/supabase/server'
import { GraphQLClient } from 'graphql-request'

let graphQLClientInstance: GraphQLClient | null = null

export async function getGraphQLClient() {
    if (!graphQLClientInstance) {
        const supabase = await createClient()
        const { data } = await supabase.auth.getSession()
        const token = data.session?.access_token

        graphQLClientInstance = new GraphQLClient(`${appConfig.API_ROUTE}/graphql`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
    }

    return graphQLClientInstance
}
