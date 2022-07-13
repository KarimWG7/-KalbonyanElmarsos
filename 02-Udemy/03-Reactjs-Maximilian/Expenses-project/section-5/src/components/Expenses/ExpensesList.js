import "./ExpensesList.css";
import Expenses from "./Expenses";

const ExpensesList = (props) => {
  let expensesContent = <p>No Expenses Found</p>;
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses</h2>;
  }
  return (
    <ul className="expenses-list">{<Expenses expenses={props.items} />}</ul>
  );
};
export default ExpensesList;
