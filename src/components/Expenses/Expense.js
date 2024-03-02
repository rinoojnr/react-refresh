import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import ExpenseFilter from './ExpenseFilter';

import './Expense.css'
import { useState } from 'react';

const Expense = (props) =>{
    const [filteredYear,setFilteredYear] = useState('2020')

    const filterChangeHandler = (selectedYear) =>{  
        setFilteredYear(selectedYear);
    }
    const filteredArray = props.items.filter(expense => {
        return(expense.date.getFullYear().toString() === filteredYear);
    });

    let expenseContent = <p>No Expense Found</p>;
    if(filteredArray.length > 0){
        expenseContent = filteredArray.map((expense,index) =>{
            return(
                <ExpenseItem 
                // key = {expense.id}
                key = {index}
                title = {expense.title} 
                amount = {expense.amount} 
                date = {expense.date}  
            />
            )
        })
    }

    return(
        <Card className="expenses">
            <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
            {expenseContent}   
        </Card>
    )
}

export default Expense;