import ExpenseForm from "./Form/ExpenseForm";
import "./NewExpense.css";

const NewExpense = ({ onAddExpense }) => {
  const saveEpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      id: Math.random().toString(),
      ...enteredExpenseData,
    };
    onAddExpense(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpensedata={saveEpenseDataHandler} />
    </div>
  );
};
export default NewExpense;
