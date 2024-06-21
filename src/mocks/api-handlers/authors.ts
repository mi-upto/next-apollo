import { http, HttpResponse } from 'msw';
import AuthorJSON from '@/mocks/json/author.json';

export const authorsAPIs = [
  http.get(`/author/:id`, async ({ params }) => {
    const id = Number(params.id);

    if (isNaN(id) || !id) {
      return HttpResponse.json({ message: 'Invalid post ID' }, { status: 400 });
    }

    return HttpResponse.json(AuthorJSON, { status: 200 });
  }),
];
