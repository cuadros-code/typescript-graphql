import express from 'express'

import { ApolloServer } from 'apollo-server-express'
import { buildSchema } from 'type-graphql'
import { UserResolver } from './resolvers/UserResolver';


export async function startServer(){
  try {

    const app = express();
    
    const server = new ApolloServer({
      schema: await buildSchema({
        resolvers: [UserResolver],
        validate: false
      }),
      context: ({req, res}) => ({req, res})
    })

    await server.start()

    server.applyMiddleware({
      app: app,
      path: '/api'
    })
  
    return app;

  } catch (error) {
    console.log(error)
  }
}
