import {
  Todo$Outbound,
  CreateTodoRequest$inboundSchema,
  UpdateTodoRequest$inboundSchema,
} from "@acme/todo-sdk/models/components";
import { http, HttpResponse } from "msw";

const url = "https://todo.example.com";

const defaultMockTodos: Todo$Outbound[] = [
  {
    id: "1",
    title: "Test Todo 1",
    completed: false,
    created_at: "2023-01-01T00:00:00.000Z",
    updated_at: "2023-01-01T00:00:00.000Z",
  },
  {
    id: "2",
    title: "Test Todo 2",
    completed: true,
    created_at: "2023-01-02T00:00:00.000Z",
    updated_at: "2023-01-02T00:00:00.000Z",
    due_date: "2023-12-31",
  },
];

export const acmeHandlers = [
  http.post(`${url}/todo`, async ({ request }) => {
    const body = await request.json();
    const todoForm = CreateTodoRequest$inboundSchema.parse(body);

    const todo: Todo$Outbound = {
      id: Date.now().toString(),
      title: todoForm.title,
      completed: false,
      due_date: todoForm.dueDate?.toString(),
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };

    return HttpResponse.json(todo);
  }),

  http.get(`${url}/todo`, async () => {
    return HttpResponse.json(defaultMockTodos);
  }),

  http.patch(`${url}/todo/:id`, async ({ request, params }) => {
    const id = params.id as string;
    const body = await request.json();
    const updateData = UpdateTodoRequest$inboundSchema.parse(body);

    const updatedTodo: Todo$Outbound = {
      id,
      title: "Test Todo",
      completed: false,
      due_date: undefined,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };

    if (updateData.completed !== undefined) {
      updatedTodo.completed = updateData.completed ?? false;
    }

    if (updateData.dueDate) {
      updatedTodo.due_date = updateData.dueDate.toString();
    }

    return HttpResponse.json(updatedTodo);
  }),

  http.delete(`${url}/todo/:id`, () => {
    return HttpResponse.json();
  }),
];

export function createAcmeHandlers() {
  let mockTodos: Todo$Outbound[] = JSON.parse(JSON.stringify(defaultMockTodos));

  const acmeHandlers = [
    http.get(`${url}/todo`, async () => {
      return HttpResponse.json(mockTodos);
    }),

    http.post(`${url}/todo`, async ({ request }) => {
      const body = await request.json();
      const todoForm = CreateTodoRequest$inboundSchema.parse(body);

      const todo: Todo$Outbound = {
        id: Date.now().toString(),
        title: todoForm.title,
        completed: false,
        due_date: todoForm.dueDate?.toString(),
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      };

      mockTodos.push(todo);

      return HttpResponse.json(todo);
    }),

    http.patch(`${url}/todo/:id`, async ({ request, params }) => {
      const id = params.id as string;
      const body = await request.json();
      const updateData = UpdateTodoRequest$inboundSchema.parse(body);

      const todo = mockTodos.find((v) => v.id === id);

      if (!todo) {
        return HttpResponse.error();
      }

      todo.completed = updateData.completed ?? todo.completed;
      todo.due_date = updateData.dueDate?.toString() ?? todo.due_date;
      todo.title = updateData.title ?? todo.title;

      const updatedTodo: Todo$Outbound = {
        ...todo,
        updated_at: new Date().toISOString(),
      };

      return HttpResponse.json(updatedTodo);
    }),

    http.delete(`${url}/todo/:id`, ({ params }) => {
      const id = params.id as string;
      const todoIndex = mockTodos.findIndex((todo) => todo.id === id);

      if (todoIndex === -1) {
        return HttpResponse.error();
      }

      const deletedTodo = mockTodos[todoIndex];
      mockTodos.splice(todoIndex, 1);

      return HttpResponse.json(deletedTodo);
    }),
  ];

  return {
    handlers: acmeHandlers,
    resetTodos: () => {
      mockTodos = JSON.parse(JSON.stringify(defaultMockTodos));
    },
  };
}
