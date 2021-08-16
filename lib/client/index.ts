import { GraphQLClient } from 'graphql-request'

const headers = {
  authorization: 'Bearer MY_TOKEN',
}

const graphqlRequestClient = new GraphQLClient(
  `http://localhost:3000/api/graphql`,
  {
    headers,
  }
)

export default graphqlRequestClient
