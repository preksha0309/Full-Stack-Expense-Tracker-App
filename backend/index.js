import { ApolloServer } from '@apollo/server';

import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import express from 'express';
import http from 'http';
import cors from 'cors';
import mergedResolvers from './resolvers/index.js';
import mergedTypeDefs from './typeDef/index.js';
import dotenv from 'dotenv';
import { connectDB } from './db/connectDB.js';

// by this dotenv function we can call environmeent variables in .env file  , without this func we cant access the variables
dotenv.config(); 

const app = express();
// Our httpServer handles incoming requests to our Express app.
// Below, we tell Apollo Server to "drain" this httpServer,
// enabling our servers to shut down gracefully.
const httpServer = http.createServer(app);

  const server = new ApolloServer({
    typeDefs : mergedTypeDefs,
    resolvers : mergedResolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],

  });
  await server.start();

// Set up our Express middleware to handle CORS, body parsing,
// and our expressMiddleware function.
app.use(
  '/',
  cors(),
  express.json(),
  // expressMiddleware accepts the same arguments:
  // an Apollo Server instance and optional configuration options
  expressMiddleware(server, {
    context: async ({ req }) => ({req}),
  }),
);

// Modified server startup
await new Promise((resolve) => httpServer.listen({ port: 8080 }, resolve));
await connectDB();

console.log(`🚀 Server ready at http://localhost:8080/`);


// go to appolo server docs -- serach for expressjs and then api express
