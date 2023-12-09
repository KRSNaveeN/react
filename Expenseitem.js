import ExpenseDate from "./ExpenseDate";
import "./Expenseitem.css";
import { useState } from "react";
const Expenseitem = (props)=> {
  const[title,setTitle]=useState(props.title);
  const [amount, setAmount] = useState(props.amount)
  function clickHandler(){
        setTitle("Updated Title");
        setAmount("$100");
  }
  return (
    <>
    <div className="expense-item">
      <ExpenseDate data={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
        {/* <button onClick={clickHandler}>change title</button> */}
        <button onClick={clickHandler}>change title</button>
      </div>
    </div>
    </>
  );
}

export default Expenseitem;
