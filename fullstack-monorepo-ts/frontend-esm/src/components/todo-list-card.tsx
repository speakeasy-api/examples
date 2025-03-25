import { Todo, UpdateTodoRequest } from "@acme/todo-sdk/models/components";
import classes from "./todo-list-card.module.css";
import { useState } from "react";

type TodoListCardProps = {
  todo: Todo;
  onUpdate?: (id: string, updates: UpdateTodoRequest) => Promise<void> | void;
  onDelete?: (id: string) => Promise<void> | void;
};

const TodoListCard: React.FC<TodoListCardProps> = ({
  todo,
  onUpdate,
  onDelete,
}) => {
  const [loading, setLoading] = useState(false);

  const handleCheckboxChange = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setLoading(true);
    const { checked } = event.target;
    const updates: UpdateTodoRequest = {
      completed: checked,
    };

    await onUpdate?.(todo.id, updates);
    setLoading(false);
  };

  const handleDelete = async () => {
    setLoading(true);
    await onDelete?.(todo.id);
    setLoading(false);
  };

  return (
    <div className={classes["root"]}>
      <div>
        <div className={classes["title"]}>{todo.title}</div>
        <div className={classes["due-date"]}>
          {todo.dueDate?.toString() ?? "No due date"}
        </div>
      </div>
      <div className={classes["actions"]}>
        <button
          data-testid="delete-button"
          className={classes["delete-btn"]}
          onClick={handleDelete}
          disabled={loading}
        >
          Delete
        </button>
        <input
          type="checkbox"
          data-testid="completed-checkbox"
          checked={todo.completed}
          onChange={handleCheckboxChange}
          disabled={loading}
        />
      </div>
    </div>
  );
};

export default TodoListCard;
