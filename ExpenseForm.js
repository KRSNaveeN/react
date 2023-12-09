import "./ExpenseForm.css";
import { useState } from "react";

function ExpenseForm(props) {
  // const [enteredTitle, setEnteredTitle] = useState("");
  // const [enteredAmount, setEnteredAmount] = useState("");
  // const [enteredDate, setEnteredDate] = useState("");
  // const expenses =[{title: enteredTitle,
  //                 amount : enteredAmount,
  //                 data : enteredDate,}
  // ]

  const [userInput , setuserInput] =useState({title: "", amount : "", date : ""})

  function changeTitleHandler(e) {
    setuserInput({...userInput, title:e.target.value});
  }

  function amountHandler(e) {
    setuserInput({...userInput, amount:e.target.value});
  }

  function dateHandler(e) {
    setuserInput({...userInput, date:e.target.value});
  }


  let submitHandler = (event) => {
    // event.preventDefault();
    event.preventDefault();
    // const expenseData = {
    //   title: enteredTitle,
    //   date: new Date(enteredDate),
    //   amount: enteredAmount
    // };
    userInput.date = new Date(userInput.date);
    const expenseData = userInput;
    //  console.log(expenseData.date, userInput);
    props.onSaveData(expenseData);
    // setEnteredTitle("");
    // setEnteredDate("");
    // setEnteredAmount("");
    setuserInput({title: "", amount : "", date : ""});

  };

  return (
    <form onSubmit={submitHandler}>
      
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              value={userInput.title}
              onChange={changeTitleHandler}
              type="text"
            />
          </div>

          <div className="new-expense__control">
            <label>Amount</label>
            <input value={userInput.amount} onChange={amountHandler} type="no" />
          </div>

          <div className="new-expense__control">
            <label>Date</label>
            <input value={userInput.date} onChange={dateHandler} type="date" />
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
