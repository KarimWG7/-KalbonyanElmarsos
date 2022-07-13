import Card from "./components/UI/card/Card";
import Expenses from "./components/Expenses/Expenses";
import "./components/Expenses/Expenses.css";
import NewExpense from "./components/NewExpense/NewExpense";
import ExpensesFilter from "./components/Expenses/ExpensesFilter/ExpensesFilter";
import { useState } from "react";
const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  const [filteredYear, setFilteredYear] = useState("2020");
  const addExpenseHandler = (expense) => {
    console.log(expense, "from App");
    expenses.push(expense);
    console.log(expenses);
  };
  const onSelectChange = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onSelectHandler={onSelectChange} />
        <Expenses expenses={expenses} />
      </Card>
    </div>
  );
};

export default App;
