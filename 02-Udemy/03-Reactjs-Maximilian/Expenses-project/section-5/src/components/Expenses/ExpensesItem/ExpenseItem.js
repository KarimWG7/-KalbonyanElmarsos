import ExpenseDate from "../ExpenseDate/ExpenseDate";
import Card from "../../UI/card/Card";

import "./ExpenseItem.css";
const ExpenseItem = ({ expense }) => {
  const { date, title, amount } = expense;

  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
    </Card>
  );
};
export default ExpenseItem;
