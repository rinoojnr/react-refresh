import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import Card from '../UI/Card';  

import './ExpenseItem.css'

const ExpenseItem = (props) =>{
    console.log(props)
    return ( 
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <ExpenseDetails title={props.title} />
            <div className="expense-item__price">
                <div><h2>${props.amount}</h2></div>
            </div>
            <div className="expense-item__location">
                <h2>{props.LocationOfExpenditure}</h2>
            </div>
        </Card>
    )
}

export default ExpenseItem;

