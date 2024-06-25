import { RESTDataSource } from '@apollo/datasource-rest';
import { TrackModel, AuthorModel } from '@/app/api/graphql/_models';

export class TracksAPI extends RESTDataSource {
  baseURL = process.env.NEXT_DATA_SOUCE_URI;

  getTracksForHome() {
    return this.get<TrackModel[]>('tracks');
  }

  getAuthor(authorId: string) {
    return this.get<AuthorModel>(`author/${authorId}`);
  }
}
