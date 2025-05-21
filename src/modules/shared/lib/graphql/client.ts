import { createClient } from '@/modules/auth/lib/supabase/server'
import { apiRoute } from '@/modules/shared/routes/routes'
import { GraphQLClient } from 'graphql-request'

let graphQLClientInstance: GraphQLClient | null = null

export async function getGraphQLClient() {
    if (!graphQLClientInstance) {
        const supabase = await createClient()
        const { data } = await supabase.auth.getSession()
        const token = data.session?.access_token

        graphQLClientInstance = new GraphQLClient(apiRoute, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
    }

    return graphQLClientInstance
}
