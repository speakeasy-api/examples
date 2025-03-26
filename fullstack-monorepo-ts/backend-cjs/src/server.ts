import cors from "cors";
import express from "express";
import * as routes from "./routes";

const router = express.Router();

router.get("/todo", routes.getTodos);
router.post("/todo", routes.createTodo);

router.get("/todo/:id", routes.getTodoById);
router.patch("/todo/:id", routes.updateTodoById);
router.delete("/todo/:id", routes.deleteTodoById);

const app = express();

app.use(express.json());
app.use(cors());

app.use("/", router);

const PORT = process.env.PORT || 5174;

app.listen(PORT, (error) => {
  if (error) return console.error("Error starting server:", error);
  console.log(`App listening at http://localhost:${PORT}`);
});
