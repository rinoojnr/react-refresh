import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import Card from '../UI/Card';  

import './ExpenseItem.css'

const ExpenseItem = (props) =>{
    const [title, setTitle] = useState(props.title);

    const clickHandler = () => {
        setTitle('Updated!');
      };
    
    return ( 
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <ExpenseDetails title={title} />
            <div className="expense-item__price">
                <div><h2>${props.amount}</h2></div>
            </div>
            <div className="expense-item__location">
                <h2>{props.LocationOfExpenditure}</h2>    
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </Card>
    )
}

export default ExpenseItem;

