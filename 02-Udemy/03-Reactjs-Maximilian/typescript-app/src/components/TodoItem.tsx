import React from "react";
import classes from "./TodoItem.module.css";

const TodoItem: React.FC<
  React.PropsWithChildren<{ text: string; onReomveTodo: () => void }>
> = (props) => {
  return (
    <li className={classes.item} onClick={props.onReomveTodo}>
      {props.text}
    </li>
  );
};

export default TodoItem;
