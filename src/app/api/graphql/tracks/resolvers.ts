import { Resolvers } from '@/app/api/graphql/types';

export const tracksResolvers: Resolvers = {
  Query: {
    trackList: (parent, __, { dataSources }) => {
      return dataSources.trackAPI.getTracksForHome();
    },
  },
  Track: {
    author: ({ authorId }, _, { dataSources }) => {
      return dataSources.trackAPI.getAuthor(authorId);
    },
  },
};
