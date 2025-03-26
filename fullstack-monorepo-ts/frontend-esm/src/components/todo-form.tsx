import { useCreateTodoMutation } from "@acme/todo-sdk/react-query/createTodo.js";
import { queryKeyGetTodos } from "@acme/todo-sdk/react-query/getTodos.js";
import { RFCDate } from "@acme/todo-sdk/types/rfcdate.js";
import { useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import classes from "./todo-form.module.css";

type TodoFormInput = {
  title: string;
  dueDate?: string;
};

const TodoForm = () => {
  const queryClient = useQueryClient();

  const mutation = useCreateTodoMutation({
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: queryKeyGetTodos() });
    },
  });

  const form = useForm<TodoFormInput>({
    disabled: mutation.isPending,
  });

  const handleSubmit = form.handleSubmit(async (data) => {
    await mutation.mutateAsync({
      request: {
        title: data.title,
        dueDate: data.dueDate ? new RFCDate(data.dueDate) : undefined,
      },
    });
  });

  return (
    <form className={classes["root"]} onSubmit={handleSubmit}>
      <div className={classes["input-group"]}>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          data-testid="title-input"
          {...form.register("title", {
            required: true,
            disabled: form.formState.disabled,
          })}
        />
        {form.formState.errors?.title && (
          <p className={classes.error}>{form.formState.errors.title.message}</p>
        )}
      </div>
      <div className={classes["input-group"]}>
        <label htmlFor="dueDate">Due Date</label>
        <input
          id="dueDate"
          data-testid="due-date-input"
          {...form.register("dueDate", { disabled: form.formState.disabled })}
          type="date"
        />
        {form.formState.errors?.dueDate && (
          <p className={classes.error}>
            {form.formState.errors.dueDate.message}
          </p>
        )}
      </div>
      <input
        data-testid="submit-button"
        role="button"
        type="submit"
        value={form.formState.isSubmitting ? "Submitting..." : "Create Todo"}
        disabled={form.formState.isSubmitting}
      />
    </form>
  );
};

export default TodoForm;
