import { createMiddleware } from '@mswjs/http-middleware';
import express from 'express';
import cors from 'cors';
import { handlers } from './handlers';

const app = express();

app.use(cors());
app.use(express.json());
app.use(createMiddleware(...handlers));

const PORT = 9090;
app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`);
});
