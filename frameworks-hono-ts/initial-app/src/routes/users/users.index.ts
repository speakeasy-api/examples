import { validator } from 'hono/validator';

import { createRouter } from '@/lib/createApp';


interface UserInsert {
  age: number;
  name: string;
};

interface UserSelect {
  id: string;
  age: number;
  name: string;
};

const router = createRouter();

router
  .get('/users', (c) => {
    // TODO: db query to get all users
    return c.json([{
      age: 42,
      id: '123',
      name: 'John Doe',
    }, {
      age: 32,
      id: '124',
      name: 'Sarah Jones',
    }], 200);
  });

router.post('/users', validator('json', (value, c) => {
  const body: UserInsert = value;
  if (!body || typeof body.age !== 'number' || typeof body.name !== 'string') {
    return c.text('Invalid!', 400);
  }
  return {
    body,
  };
}), (c) => {
  const user = c.req.valid('json');
  // TODO: db query create a user
  const createdUser: UserSelect = {
    id: '123',
    age: user.body.age,
    name: user.body.name,
  };
  return c.json(createdUser, 200);
});

router.get('/users/:id', (c) => {
  const id = c.req.param('id');
  if (!id) {
    return c.json(
      {
        message: 'Missing id',
      },
      404,
    );
  }

  // TODO: db query to get a user by id
  const foundUser: UserSelect = {
    age: 50,
    id,
    name: 'Lisa Smith',
  };

  if (!foundUser) {
    return c.json(
      {
        message: 'Not found',
      },
      404,
    );
  }
  return c.json(foundUser, 200);
});

export default router;
