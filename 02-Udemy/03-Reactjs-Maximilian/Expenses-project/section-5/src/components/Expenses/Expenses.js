import ExpenseItem from "./ExpensesItem/ExpenseItem";

const Expenses = ({ expenses }) => {
  
  return expenses.map((exp) => {
    return <ExpenseItem key={exp.id} expense={exp} />;
  });
};

export default Expenses;
