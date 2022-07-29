import React from "react";
import { useState, useReducer } from "react";

const initialInputState = {
  value: "",
  isTouched: false,
};
const inputStateReducer = (state, action) => {
  if (action.type === "INPUT") {
    return { value: action.value, isTouched: state.isTouched };
  }
  if (action.type === "BLUR") {
    return { isTouched: true, value: state.value };
  }
  if (action.type === "RESET") {
    return { isTouched: false, value: "" };
  }
  return initialInputState;
};
const useInput = (validateValue) => {
  const [inputState, dispatchState] = useReducer(
    inputStateReducer,
    initialInputState
  );

  const valueIsValid = validateValue(inputState.value);
  const hasError = !valueIsValid && inputState.isTouched;

  const valueChangeHandler = (event) => {
    dispatchState({ type: "INPUT", value: event.target.value });
  };
  const inputBlurHandler = (event) => {
    dispatchState({ type: "BLUR" });
  };

  const reset = () => {
    dispatchState({ type: "RESET" });
  };
  return {
    value: inputState.value,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    isValid: valueIsValid,
    reset,
  };
};

export default useInput;
