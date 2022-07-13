import { useState } from "react";
import ExpenseForm from "./Form/ExpenseForm";
import "./NewExpense.css";

const NewExpense = ({ onAddExpense }) => {
  const [isEditing, setIsEditing] = useState(false);
  const saveEpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      id: Math.random().toString(),
      ...enteredExpenseData,
    };
    onAddExpense(expenseData);
    setIsEditing(false)
  };
  const startEditingHandler = () => {
    setIsEditing(true);
  };
  const stopEditingHandler = () => {
    setIsEditing(false);
  };
  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpensedata={saveEpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};
export default NewExpense;
