import { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = ({ onSaveExpensedata, onCancel }) => {
  // Use States
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredDate, setEnteredDate] = useState("2019-01-01");
  const [enteredAmount, setEnteredAmount] = useState(0.01);

  // Change Handlres
  const titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value);
  };
  const dateChangeHandler = (e) => {
    setEnteredDate(e.target.value);
  };
  const amountChangeHandler = (e) => {
    setEnteredAmount(e.target.value);
  };
  // Submittion handler
  const submitHandler = (e) => {
    e.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    // clearing the input feilds after submitting
    onSaveExpensedata(expenseData);
    setEnteredAmount("");
    setEnteredTitle("");
    setEnteredDate("");
  };

  // returning JSX
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls ">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            required
            value={enteredTitle}
            type="text"
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            required
            value={enteredAmount}
            type="text"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            required
            value={enteredDate}
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions open">
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
