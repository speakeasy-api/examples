import {
  Todo$Outbound,
  TodoForm$inboundSchema,
} from "@acme/sdk/models/components";
import { http, HttpResponse } from "msw";

export const acmeHandlers = [
  http.post("https://todo.example.com/todo", async ({ request }) => {
    const body = await request.json();
    const todoForm = TodoForm$inboundSchema.parse(body);
    const todo: Todo$Outbound = {
      id: "c7b3d8e0-5e0b-4b0f-8b3a-3b9f4b3d3b3d",
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      title: todoForm.title,
      completed: false,
    };

    return HttpResponse.json(todo);
  }),
];
