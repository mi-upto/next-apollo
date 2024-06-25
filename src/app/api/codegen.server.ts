import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: './src/app/api/graphql/**/schema.ts',
  generates: {
    './src/app/api/graphql/types.ts': {
      plugins: ['typescript', 'typescript-resolvers'],
      config: {
        contextType: '@/app/api/graphql/context#DataSourceContext',
        mappers: {
          Author: '@/app/api/graphql/_models#AuthorModel',
          Track: '@/app/api/graphql/_models#TrackModel',
        },
      },
    },
  },
};

export default config;
