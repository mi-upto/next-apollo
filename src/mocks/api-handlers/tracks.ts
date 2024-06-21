import { http, HttpResponse, delay } from 'msw';
import TracksJSON from '@/mocks/json/tracks.json';

export const tracksAPIs = [
  // list
  http.get(`/tracks`, async () => {
    await delay(1000);
    return HttpResponse.json(TracksJSON, { status: 200 });
  }),

  // detail
  http.get(`/tracks/:id`, async ({ params }) => {
    const { id } = params;
    if (!id) {
      return HttpResponse.json({ message: 'Invalid post ID' }, { status: 400 });
    }

    const targetTack = TracksJSON.find((it) => {
      return it.id === id;
    });
    return HttpResponse.json(targetTack, { status: 200 });
  }),
];
