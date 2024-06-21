import { RESTDataSource } from '@apollo/datasource-rest';
import { Track, Author } from '@/models';

export class TracksAPI extends RESTDataSource {
  baseURL = process.env.NEXT_DATA_SOUCE_URI;

  getTracksForHome() {
    console.log('call');
    return this.get<Track[]>('tracks');
  }

  getAuthor(authorId: string) {
    return this.get<Author>(`author/${authorId}`);
  }
}
