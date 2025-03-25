import { UpdateTodoRequest } from "@acme/todo-sdk/models/components";
import {
  queryKeyGetTodos,
  useDeleteTodoMutation,
  useGetTodos,
  useUpdateTodoMutation,
} from "@acme/todo-sdk/react-query";
import { useQueryClient } from "@tanstack/react-query";
import TodoListCard from "./todo-list-card";
import classes from "./todo-list.module.css";

const useTodoList = () => {
  const queryClient = useQueryClient();

  const query = useGetTodos();

  const updater = useUpdateTodoMutation({
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: queryKeyGetTodos() });
    },
  });

  async function handleUpdateTodo(id: string, update: UpdateTodoRequest) {
    await updater.mutateAsync({
      request: {
        id,
        updateTodoRequest: update,
      },
    });
  }

  const deleter = useDeleteTodoMutation({
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: queryKeyGetTodos() });
    },
  });

  async function handleDeleteTodo(id: string) {
    await deleter.mutateAsync({
      request: {
        id,
      },
    });
  }

  return {
    query,
    updater,
    handleUpdateTodo,
    deleter,
    handleDeleteTodo,
  };
};

const TodoList = () => {
  const { query, handleDeleteTodo, handleUpdateTodo } = useTodoList();

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  if (query.isPending) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <ul className={classes["list"]}>
        {query.data?.map((todo) => (
          <li key={todo.id}>
            <TodoListCard
              todo={todo}
              onUpdate={handleUpdateTodo}
              onDelete={handleDeleteTodo}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
