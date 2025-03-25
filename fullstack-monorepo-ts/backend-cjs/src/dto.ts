import z from "zod";

export type DbTodo = {
  id: string;
  title: string;
  due_date?: string | undefined;
  completed: boolean;
  created_at: string;
  updated_at: string;
};

export const UpdateTodoReqauestBodySchema = z.object({
  title: z.string().optional(),
  due_date: z.string().optional(),
  completed: z.boolean().optional(),
});

export type UpdateTodoReqauestBody = z.infer<
  typeof UpdateTodoReqauestBodySchema
>;

export const CreateTodoRequestSchema = z.object({
  title: z.string(),
  due_date: z.string().optional(),
  completed: z.boolean().optional().default(false),
});

export type CreateTodoRequest = z.infer<typeof CreateTodoRequestSchema>;
