import ExpenseDate from "./ExpenseDate";
import "./Expenseitem.css";
import { useState } from "react";
const Expenseitem = (props)=> {
  const[value,setValue]=useState(true);
  function clickHandler(){
        setValue(false);
  }
  return (
    <>
   {value && (<div className="expense-item">
      <ExpenseDate data={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
        <button onClick={clickHandler}>delete</button>
      </div>
    </div>)}
    </>
  );
}

export default Expenseitem;
