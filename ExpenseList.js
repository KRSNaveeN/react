import Expenseitem from './Expenseitem'
import { useState } from 'react'
import './ExpenseList.css'
function ExpenseList(props){
  let [value, setValue] = useState(false)
  if(props.arr.length === 0)
  {
    return <p className='expenses-list__fallback'>Content Missing</p>
  }
  if(props.arr.length  == 1)
  {
    //  let  x = <h2>Add more items</h2>
    value=true;
    
  }
   return(
    // let contentDat = <p>Missing content</p>
    // if(filteredExpenses.length > 0)
   <>
    <ul className='expense-list'>
    {
    // contentDat = filteredExpenses.map((items) => {
    props.arr.map((items) => {
       return (
         <Expenseitem
           key={items.id}
           title={items.title}
           date={items.date}
           amount={items.amount}
         />
            );
                                   })
   }
   </ul>
   {value && <h2>Only single Expense. Please add more items</h2> }
   </>
   )
   
}
export default ExpenseList;