import "./styles.css";
import { useState } from "react";
import Expenses from "./components/UI/Expenses";
import NewExpense from "./components/Expenses/NewExpense";
const expenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2022, 8, 24)
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2020, 5, 19)
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 6, 22)
  }
];
export default function App() {
  const [newitem, setnewitem] = useState(expenses);
  const expenseHandler = (obj) => {
    // console.log([obj, ...newitem]);
    // console.log("in app ");
    setnewitem([obj, ...newitem]);
  };
  // console.log(newitem);
  return (
    <div className="App">
      <NewExpense expenses={expenseHandler} />
      {/* <NewExpense expense = {expenseHandler}/> */}
      <Expenses expense={newitem} />
    </div>
  );
}
