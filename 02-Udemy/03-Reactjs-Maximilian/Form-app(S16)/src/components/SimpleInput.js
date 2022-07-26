import React, { useState, useRef } from "react";

const SimpleInput = (props) => {
  const nameInputRef = useRef();

  const [enteredName, setEnteredName] = useState("");
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const nameInputChangeHandler = (e) => {
    setEnteredName(e.target.value);
    if (enteredName.trim() === "") {
      setEnteredNameIsValid(false);
      return;
    }
  };

  const nameInputBlur = (e) => {
    setEnteredNameTouched(true);
  };

  const formSubmitionHandler = (e) => {
    e.preventDefault();

    setEnteredNameTouched(true);

    if (enteredName.trim() === "") {
      setEnteredNameIsValid(false);
      return;
    }
    setEnteredNameIsValid(true);
    console.log(enteredName);
    setEnteredName("");
  };
  const nameInputIsInValid = !enteredNameIsValid && enteredNameTouched;
  const nameInputClasses = nameInputIsInValid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmitionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onBlur={nameInputBlur}
          value={enteredName}
          onChange={nameInputChangeHandler}
          ref={nameInputRef}
        />
        {nameInputIsInValid && (
          <p className="error-text">Name must not be empty</p>
        )}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
