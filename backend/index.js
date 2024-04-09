import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import mergedResolvers from './resolvers/index.js';
import mergedTypeDefs from './typeDef/index.js';

  const server = new ApolloServer({
    typeDefs : mergedTypeDefs,
    resolvers : mergedResolvers,

  });
  const { url } = await  startStandaloneServer(server, 
    {
        listen:{port:8080}
    });
  console.log(`🚀 Server ready at ${url}`);
