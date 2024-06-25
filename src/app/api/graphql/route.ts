import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { ApolloServer } from '@apollo/server';
import { TracksAPI } from './tracks/datasources';
import { tracksResolvers } from './tracks/resolvers';
import { tracksTypeDefs } from './tracks/schema';

const server = new ApolloServer({
  typeDefs: tracksTypeDefs,
  resolvers: tracksResolvers,
});

const handler = startServerAndCreateNextHandler(server, {
  context: async () => {
    const { cache } = server;
    return {
      dataSources: {
        trackAPI: new TracksAPI({ cache }),
      },
    };
  },
});

export async function GET(request: Request) {
  return handler(request);
}
export async function POST(request: Request) {
  return handler(request);
}
