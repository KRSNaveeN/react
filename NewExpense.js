import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";import React, {useState} from 'react'
function NewExpense(props) {

  const [isEditing, setEditing] = useState(false);
  const savedDataHandler = (expensedata) => {
    const arr = { ...expensedata, id: Math.random() };
    console.log(arr); 
    props.expenses(arr);
    setEditing(false);
  };

  const startEditing = ()=>{
    setEditing(true);
  }
  const stopEitingHandler = ()=>{
    setEditing(false);
  }
  return (
    <div className="new-expense">
      {!isEditing && <button onClick={startEditing}>Add New Expense  </button>}
     {isEditing && <ExpenseForm onSaveData={savedDataHandler} onCancel={stopEitingHandler}/>  }
    </div>
  );
}
export default NewExpense;
