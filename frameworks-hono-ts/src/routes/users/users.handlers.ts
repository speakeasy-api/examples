import type { Context } from "hono";
import type { z } from "zod";
import type { UserInsertSchema, idParamsSchema } from "@/schemas";

export const list = async (c: Context) => {
  // TODO: db query to get all users
  return c.json(
    [
      {
        age: 42,
        id: "123",
        name: "John Doe",
      },
      {
        age: 32,
        id: "124",
        name: "Sarah Jones",
      },
    ],
    200
  );
};

export const create = async (c: Context) => {
  // Hono's c.req.valid() doesn't have strong typing; the assertion ensures type safety
  // @ts-expect-error
  const user = c.req.valid("json") as z.infer<typeof UserInsertSchema>;
  console.log({ user });
  // TODO: db query to create a user
  return c.json(
    {
      id: "2342",
      age: user.age,
      name: user.name,
    },
    200
  );
};

export const getOne = async (c: Context) => {
  // Hono's c.req.valid() doesn't have strong typing; the assertion ensures type safety
  // @ts-expect-error
  const { id } = c.req.valid("param") as z.infer<typeof idParamsSchema>;
  // TODO: db query to get a user by id
  const foundUser = {
    age: 50,
    id,
    name: "Lisa Smith",
  };

  if (!foundUser) {
    return c.json(
      {
        message: "Not found",
      },
      404
    );
  }
  return c.json(foundUser, 200);
};
