import ExpenseItem from "./ExpensesItem/ExpenseItem";

const Expenses = ({ expenses }) => {
  return expenses.map((exp) => {
    return (
      <div key={exp.id} >
        <ExpenseItem expense={exp} />
      </div>
    );
  });
};

export default Expenses;
