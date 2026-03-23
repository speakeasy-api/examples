import { Hono } from "hono";
import { describeRoute, validator as zValidator } from "hono-openapi";

import { idParamsSchema, UserInsertSchema } from "@/schemas";
import * as handlers from "./users.handlers";
import * as routes from "./users.routes";

const router = new Hono();

router.get("/users", describeRoute(routes.listRoute), handlers.list);

router.post(
  "/users",
  describeRoute(routes.createRoute),
  zValidator("json", UserInsertSchema),
  handlers.create
);

router.get(
  "/users/:id",
  describeRoute(routes.getOneRoute),
  zValidator("param", idParamsSchema),
  handlers.getOne
);

export default router;
