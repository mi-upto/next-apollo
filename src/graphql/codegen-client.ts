import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: './src/app/api/graphql/schema.ts',
  documents: './src/graphql/query/**/*.graphql',
  generates: {
    './src/graphql/dist/': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-graphql-request',
        // 'typescript-resolvers',
      ],
      // config: {
      //   contextType: './context#DataSourceContext',
      //   mappers: {
      //     Track: './models#TrackModel',
      //     Author: './models#AuthorModel',
      //   },
      // },
    },
  },
};

export default config;
