import { useCreateTodoMutation } from "@acme/sdk/react-query/createTodo.js";
import { RFCDate } from "@acme/sdk/types/rfcdate.js";
import { useState } from "react";

export function NewTodoForm() {
  const [formMessage, setFormMessage] = useState<{
    level: "error" | "success";
    message: string;
  } | null>(null);
  const { mutate: createTodo } = useCreateTodoMutation();

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    setFormMessage(null);
    event.preventDefault();
    const form = event.currentTarget;
    const titleInput = form.querySelector("input[name='title']");
    if (!(titleInput instanceof HTMLInputElement)) {
      throw new Error("Title input not found");
    }
    const dueDateInput = form.querySelector("input[name='dueDate']");
    if (!(dueDateInput instanceof HTMLInputElement)) {
      throw new Error("Due date input not found");
    }

    const formData = new FormData(form);
    const title = formData.get("title");
    if (typeof title !== "string" || !title) {
      titleInput.setCustomValidity("Title is required");
      form.reportValidity();
      return;
    } else {
      titleInput.setCustomValidity("");
    }

    const dueDate = formData.get("dueDate");
    if (dueDate && typeof dueDate !== "string") {
      dueDateInput.setCustomValidity("Due date is required");
      form.reportValidity();
      return;
    } else {
      dueDateInput.setCustomValidity("");
    }

    createTodo(
      {
        request: {
          title,
          dueDate: dueDate ? new RFCDate(dueDate) : undefined,
        },
      },
      {
        onSuccess() {
          form.reset();
          setFormMessage({
            level: "success",
            message: "Todo created successfully",
          });
        },
        onError(err) {
          setFormMessage({ level: "error", message: err.message });
          form.reportValidity();
        },
      }
    );
  };

  return (
    <div>
      {formMessage ? (
        <p style={{ color: formMessage.level === "error" ? "red" : "green" }}>
          {formMessage.message}
        </p>
      ) : null}
      <form className="new-todo-form" onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input required id="title" type="text" name="title" />
        <label htmlFor="dueDate">Due date</label>
        <input id="dueDate" type="date" name="dueDate" />
        <input type="submit" value="Create" />
      </form>
    </div>
  );
}
