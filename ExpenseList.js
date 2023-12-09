import Expenseitem from './Expenseitem'
import './ExpenseList.css'
function ExpenseList(props){
  if(props.arr.length === 0)
  {
    return <p className='expenses-list__fallback'>Content Missing</p>
  }
   return(
    // let contentDat = <p>Missing content</p>
    // if(filteredExpenses.length > 0)
    // if(props.arr.length >0)
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
   )
   
}
export default ExpenseList;