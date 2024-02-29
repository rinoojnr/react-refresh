import { useState } from "react";


const ExpenseForm = () =>{
    const clickHandler = (event) =>{
        console.log(event.target.value);
    }
    return(
        <div>
            <div><input type="text" placeholder="Expense Title" onChange={clickHandler}></input></div>
            <div><input type="number" placeholder="Expense Amount" onChange={clickHandler}></input></div>
            <div><button>Add Expense</button></div>
        </div>
    )
}

export default ExpenseForm;