import { cors } from 'hono/cors';
import createApp from '@/lib/createApp';
import users from '@/routes/users/users.index';
import configureOpenAPI from './lib/configureOpenAPI';

const app = createApp();
configureOpenAPI(app);

const routes = [
  users,
] as const;

app.use(
  '/users',
  cors({
    origin: 'http://localhost:5173',
  }),
);

routes.forEach((route) => {
  app.route('/', route);
});


export default app;
