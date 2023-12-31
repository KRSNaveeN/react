import React, { useState } from "react";

import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  const [year, setYear] = useState("");

  const yearChangeHandler = (event) => {
    // setYear(event.value);
    setYear(event.target.value);
    // console.log(event.target.value)
    // console.log(year);
    props.onYearChange(event.target.value);
  };
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select onChange={yearChangeHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
