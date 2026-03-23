import { cors } from "hono/cors";
import { Hono } from "hono";
import users from "@/routes/users/users.index";
import configureOpenAPI from "./lib/configureOpenAPI";

const app = new Hono();

// Register OpenAPI description and Scalar UI routes
configureOpenAPI(app);

// Enable CORS for the /users routes to allow requests from the frontend application
app.use(
  "/users",
  cors({
    origin: "http://localhost:5173",
  })
);

// Register routes
const routes = [users] as const;
routes.forEach((route) => {
  app.route("/", route);
});

export default app;
