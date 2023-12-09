import "./ExpenseForm.css";
import { useState } from "react";

function ExpenseForm(props) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  // const expenses =[{title: enteredTitle,
  //                 amount : enteredAmount,
  //                 data : enteredDate,}
  // ]

  function changeTitleHandler(e) {
    setEnteredTitle(e.target.value);
  }

  function amountHandler(e) {
    setEnteredAmount(e.target.value);
  }

  function dateHandler(e) {
    setEnteredDate(e.target.value);
  }
  let submitHandler = (event) => {
    // event.preventDefault();
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      date: new Date(enteredDate),
      amount: enteredAmount
    };
    //  console.log(expenseData.data);
    props.onSaveData(expenseData);
    setEnteredTitle("");
    setEnteredDate("");
    setEnteredAmount("");

  };

  return (
    <form onSubmit={submitHandler}>
      
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              value={enteredTitle}
              onChange={changeTitleHandler}
              type="text"
            />
          </div>

          <div className="new-expense__control">
            <label>Amount</label>
            <input value={enteredAmount} onChange={amountHandler} type="no" />
          </div>

          <div className="new-expense__control">
            <label>Date</label>
            <input value={enteredDate} onChange={dateHandler} type="date" />
          </div>
        </div>
        <div className="new-expense__actions">
          <button type='button' onClick={props.onCancel}>Cancel</button>
          <button>Add Expense</button>
        </div>
      
    </form>
  );
}
export default ExpenseForm;
