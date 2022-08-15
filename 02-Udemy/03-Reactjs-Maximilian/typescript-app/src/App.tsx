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

  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todosState} />
    </div>
  );
}

export default App;
