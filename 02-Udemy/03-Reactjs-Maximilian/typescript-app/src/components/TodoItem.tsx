import React from "react";

const TodoItem: React.FC<React.PropsWithChildren<{ text: string }>> = (
  props
) => {
  return <li>{props.text}</li>;
};

export default TodoItem;
