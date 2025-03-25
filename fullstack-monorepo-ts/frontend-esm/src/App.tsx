import "./App.css";
import TodoForm from "./components/todo-form";
import TodoList from "./components/todo-list";

function App() {
  return (
    <main>
      <div className="container">
        <h2>Todo List</h2>
        <TodoForm />
      </div>
      <hr />
      <div>
        <TodoList />
      </div>
    </main>
  );
}

export default App;
