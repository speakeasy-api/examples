import { Request, Response } from "express";
import { CreateTodoRequestSchema, UpdateTodoReqauestBodySchema } from "./dto";
import { NotFoundError, todoService } from "./service";

/**
 * Create a todo item
 * POST /todo
 */
export const createTodo = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const reqBody = CreateTodoRequestSchema.safeParse(req.body);

  if (reqBody.success === false) {
    res.status(400).json({ error: reqBody.error });
    return;
  }

  // Create new todo using service
  const newTodo = todoService.createTodo({
    title: reqBody.data.title,
    due_date: reqBody.data.due_date,
    completed: reqBody.data.completed,
  });

  // Return the created todo
  res.status(200).json(newTodo);
};

/**
 * Get all todo items
 * GET /todo
 */
export const getTodos = async (_req: Request, res: Response): Promise<void> => {
  // Get all todos using service
  const todos = todoService.getAllTodos();

  // Return all todos
  res.status(200).json(todos);
};

/**
 * Get a todo item by id
 * GET /todo/{id}
 */
export const getTodoById = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const { id } = req.params;

  // Find todo by id using service
  const todo = todoService.getTodoById(id);

  // Return 404 if todo not found
  if (!todo) {
    res.status(404).json({ error: "Todo not found" });
    return;
  }

  // Return the found todo
  res.status(200).json(todo);
};

/**
 * Update a todo item
 * PATCH /todo/{id}
 */
export const updateTodoById = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const { id } = req.params;
  const reqBody = UpdateTodoReqauestBodySchema.safeParse(req.body);

  if (reqBody.success === false) {
    res.status(400).json({ error: reqBody.error });
    return;
  }

  if (Object.keys(reqBody.data).length === 0) {
    const todo = todoService.getTodoById(id);

    if (!todo) {
      res.status(404).json({ error: "Todo not found" });
      return;
    }

    res.status(200).json(todo);
    return;
  }

  // Update todo using service
  const result = todoService.updateTodo(id, {
    title: reqBody.data.title,
    due_date: reqBody.data.due_date,
    completed: reqBody.data.completed,
  });

  // Return 404 if todo not found
  if (!result.ok) {
    switch (result.error.constructor) {
      case NotFoundError:
        res.status(404).json({ error: "Todo not found" });
        return;
      default:
        res.status(500).json({ error: "Internal server error" });
        return;
    }
  }

  // Return the updated todo
  res.status(200).json(result.value);
};

/**
 * Delete a todo item by id
 * DELETE /todo/{id}
 */
export const deleteTodoById = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const { id } = req.params;

  // Delete todo using service
  const result = todoService.deleteTodo(id);

  // Return 404 if todo not found
  if (!result.ok) {
    switch (result.error.constructor) {
      case NotFoundError:
        res.status(404).json({ error: "Todo not found" });
        return;
      default:
        res.status(500).json({ error: "Internal server error" });
        return;
    }
  }

  // Return success response with the deleted todo
  res.status(200).json(result.value);
};
