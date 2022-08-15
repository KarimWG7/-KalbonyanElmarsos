import React from 'react';
import Todo from "../modals/todo";
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";

const Todos: React.FC<
  React.PropsWithChildren<{ items: Todo[]; onReomveTodo: (id: string) => void }>
> = (props) => {
  return (
    <ul className={classes.todos}>
      {props.items.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          onReomveTodo={props.onReomveTodo.bind(null , item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;