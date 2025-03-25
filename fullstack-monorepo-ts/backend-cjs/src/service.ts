import type { Todo$Outbound } from "@acme/todo-sdk/models/components";
import { Result } from "@acme/todo-sdk/types";
import { type DbTodo } from "./dto";

// In-memory storage for todos
const todos: DbTodo[] = [
  {
    id: Date.now().toString(),
    title: "Initial Todo",
    completed: false,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
];

export class NotFoundError extends Error {}

/**
 * Todo service with business logic for managing todos
 */
class TodoService {
  /**
   * Get all todo items
   */
  getAllTodos(): DbTodo[] {
    return todos;
  }

  /**
   * Get a todo item by id
   * @param id The todo id
   */
  getTodoById(id: string): Result<DbTodo, NotFoundError> {
    const result = todos.find((item) => item.id === id);

    if (!result) {
      return { ok: false, error: new NotFoundError() };
    }

    return { ok: true, value: result };
  }

  /**
   * Create a new todo item
   * @param todoData The todo data
   */
  createTodo(todoData: {
    title: string;
    due_date?: string;
    completed?: boolean;
  }): Todo$Outbound {
    const newTodo: Todo$Outbound = {
      id: Date.now().toString(), // Simple ID generation
      title: todoData.title,
      due_date: todoData.due_date && todoData.due_date.toString(),
      completed: todoData.completed ?? false,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };

    // Add to storage
    todos.push(newTodo);

    return newTodo;
  }

  /**
   * Update a todo item
   * @param id The todo id
   * @param todoData The todo data to update
   */
  updateTodo(
    id: string,
    todoData: {
      title?: string;
      due_date?: string;
      completed?: boolean;
    },
  ): Result<DbTodo, Error> {
    // Find todo index by id
    const todoIndex = todos.findIndex((item) => item.id === id);

    // Return not found if todo doesn't exist
    if (todoIndex === -1) {
      return { ok: false, error: new NotFoundError() };
    }

    const updatedTodo = todos[todoIndex];

    // Update fields if provided
    if (todoData.title) {
      updatedTodo.title = todoData.title;
    }

    if (todoData.due_date) {
      updatedTodo.due_date = todoData.due_date;
    }

    if (todoData.completed !== undefined) {
      updatedTodo.completed = todoData.completed;
    }

    updatedTodo.updated_at = new Date().toISOString();

    return { ok: true, value: updatedTodo };
  }

  /**
   * Delete a todo item
   * @param id The todo id
   */
  deleteTodo(id: string): Result<DbTodo, NotFoundError> {
    // Find todo index by id
    const todoIndex = todos.findIndex((item) => item.id === id);

    // Return not found if todo doesn't exist
    if (todoIndex === -1) {
      return { ok: false, error: new NotFoundError() };
    }

    // Remove the todo from the array
    const deletedTodo = todos.splice(todoIndex, 1)[0];

    return { ok: true, value: deletedTodo };
  }
}

// Export a singleton instance
export const todoService = new TodoService();
