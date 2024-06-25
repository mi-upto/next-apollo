import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: './src/app/api/graphql/**/schema.ts',
  documents: './src/graphql/query/**/*.graphql',
  generates: {
    './src/graphql/dist/client.ts': {
      plugins: ['typescript', 'typescript-operations', 'typescript-graphql-request'],
    },
  },
};

export default config;
