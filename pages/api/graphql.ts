import { ApolloServer } from 'apollo-server-micro'
import { createContext } from 'graphql/config/context'
import { schema } from 'graphql/config/schema'

const apolloServer = new ApolloServer({
  schema,
  context: createContext,
  playground: process.env.NODE_ENV !== 'production',
  tracing: process.env.NODE_ENV === 'development',
})

export default apolloServer.createHandler({ path: '/api/graphql' })

export const config = {
  api: {
    bodyParser: false,
  },
}
