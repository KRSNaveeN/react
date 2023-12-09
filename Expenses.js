import Expenseitem from "./Expenseitem";
import "./expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpenseList from "./ExpenseList";
import ExpenseChart from './ExpenseChart';

export default function Expenses(props) {
  let [value, setValue] = useState("2020");

  // const [x, y, z, a] = props.expense;
  

  function yearChange(requiredyear) {

     setValue(requiredyear);
    // we are not using setvalue so there is norerendering
  }
  const filteredExpenses = props.expense.filter((item)=>{
    return item.date.getFullYear().toString() === value
  });

  // we can also assign jsx elements to the variables outside the return function
  //  let contentDat = <p>Missing content</p>
  //  if(filteredExpenses.length > 0)
  //  {
  //  contentDat = filteredExpenses.map((items) => {
  //     return (
  //       <Expenseitem
  //         key={items.id}
  //         title={items.title}
  //         date={items.date}
  //         amount={items.amount}
  //       />
  //     );
  //   })
  // }
  console.log("inside exp");

  return (
    <div className="expenses">
      <ExpensesFilter selected={value} onYearChange={yearChange} />
      <ExpenseChart expenses ={filteredExpenses}/>
      <ExpenseList arr={filteredExpenses}/>
{/* Dealing with conditional content */}
   
   {/* {contentDat} */}


   {/* {filteredExpenses.length ===0 && <p>Content not found</p>}
   {filteredExpenses.length>0 && filteredExpenses.map((items) => {
        return (
          <Expenseitem
            key={items.id}
            title={items.title}
            date={items.date}
            amount={items.amount}
          />
        );
      })} */}


    {/* {filteredExpenses.length === 0 ? (<p>No Content Found</p>) : (filteredExpenses.map((items) => {
        return (
          <Expenseitem
            key={items.id}
            title={items.title}
            date={items.date}
            amount={items.amount}
          />
        );
      }))} */}

      {/* {filteredExpenses.map((items) => {
        return (
          <Expenseitem
            key={items.id}
            title={items.title}
            date={items.date}
            amount={items.amount}
          />
        );
      })} */}

      {/* <Expenseitem title={x.title} date={x.date} amount={x.amount} />
      <Expenseitem title={y.title} date={y.date} amount={y.amount} />
      <Expenseitem title={z.title} date={z.date} amount={z.amount} />
      <Expenseitem title={a.title} date={a.date} amount={a.amount} /> */}
    </div>
  );
}
