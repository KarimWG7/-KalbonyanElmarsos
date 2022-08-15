import React from 'react';
import Todo from "../modals/todo";
import TodoItem from "./TodoItem";

const Todos: React.FC<React.PropsWithChildren<{ items: Todo[] }>> = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        <TodoItem key={item.id} text={item.text} />
      ))}
    </ul>
  );
};

export default Todos;