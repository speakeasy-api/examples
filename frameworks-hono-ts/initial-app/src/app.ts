import createApp from '@/lib/createApp';
import users from '@/routes/users/users.index';

const app = createApp();

const routes = [
  users,
] as const;

routes.forEach((route) => {
  app.route('/', route);
});

export default app;
