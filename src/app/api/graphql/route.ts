import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { TracksAPI } from './_tracks/datasources';
import { ApolloServer } from '@apollo/server';
import { tracksResolvers } from './_tracks/resolvers';
import { tracksTypeDefs } from './_tracks/type-defs';

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
