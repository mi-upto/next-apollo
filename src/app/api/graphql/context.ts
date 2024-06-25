import { TracksAPI } from '@/app/api/graphql/tracks/datasources';

export type DataSourceContext = {
  dataSources: {
    trackAPI: TracksAPI;
  };
};
