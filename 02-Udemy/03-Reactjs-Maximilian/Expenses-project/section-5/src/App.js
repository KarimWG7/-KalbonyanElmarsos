import { useState } from "react";
import "./components/Expenses/Expenses.css";
////
import Card from "./components/UI/card/Card";
import NewExpense from "./components/NewExpense/NewExpense";
import ExpensesFilter from "./components/Expenses/ExpensesFilter/ExpensesFilter";
import ExpensesList from "./components/Expenses/ExpensesList";
import ExpensesChart from "./components/Expenses/ExpensesChart";
////

const DUMMY_EXPENSES = [
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
////

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  /////////////////
  const [filteredYear, setFilteredYear] = useState("2020");
  const onSelectChange = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  ///////////////
  const filteredExpenses = expenses.filter(
    (exp) => exp.date.getFullYear() === Number(filteredYear)
  );
  //////////////
  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Card className="expenses">
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesFilter
          selected={filteredYear}
          onSelectHandler={onSelectChange}
        />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default App;
