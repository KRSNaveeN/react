import ExpenseDate from "./ExpenseDate";
import "./Expenseitem.css";

const Expenseitem = (props)=> {
  return (
    <div className="expense-item">
      <ExpenseDate data={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
}

export default Expenseitem;
