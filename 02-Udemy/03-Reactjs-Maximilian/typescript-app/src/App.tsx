import { useState } from "react";

import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import Todo from "./modals/todo";

function App() {
  const [todosState, setTodosState] = useState<Todo[]>([]);

  const addTodoHandler = (text: string) => {
    const newTodo = new Todo(text);
    setTodosState((prevState) => {
      return [newTodo, ...prevState];
    });
  };
  const removeTodoHandler = (todoId: string) => {
    setTodosState((prevState) => {
      const newTodos = prevState.filter((todo) => todo.id !== todoId);
      return newTodos;
    });
  };

  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todosState} onReomveTodo={removeTodoHandler} />
    </div>
  );
}

export default App;
