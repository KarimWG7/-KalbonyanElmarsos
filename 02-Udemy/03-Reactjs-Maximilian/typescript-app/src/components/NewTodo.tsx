import React, { useRef } from "react";

const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = (props) => {
  const textInputRef = useRef<HTMLInputElement>(null);
  const formSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const enteredText = textInputRef.current!.value;
    if (enteredText.trim().length === 0) {
      // Throw an error
      return;
    }

    props.onAddTodo(enteredText);
    textInputRef.current!.value = "";
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <label htmlFor="text">Todo Text</label>
      <input id="text" type="text" minLength={10} ref={textInputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;