import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import Card from '../UI/Card';  

import './ExpenseItem.css'

const ExpenseItem = (props) =>{
    const [title, setTitle] = useState(props.title);
    const [amount,setAmount] = useState(props.amount);

    const clickHandler1 = () =>{
        setAmount(100);
    }

    const clickHandler = () => {
        setTitle('Updated!');
      };
    
    return ( 
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <ExpenseDetails title={title} />
            <div className="expense-item__price">
                <div><h2>${amount}</h2></div>
            </div>
            <div className="expense-item__location">
                <h2>{props.LocationOfExpenditure}</h2>    
            </div>
            <button onClick={clickHandler}>Change Title</button>
            <button onClick={clickHandler1}>Change Amount</button>
        </Card>
    )
}

export default ExpenseItem;

