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
    return(
        <Card className="expenses">
            <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
            {props.items.map((expense,index) =>{
                console.log(filteredYear,"in state")
                    if(expense.date.getFullYear() === filteredYear){
                        console.log(expense.date,"///")
                        return(
                            <ExpenseItem 
                            // key = {expense.id}
                            key = {index}
                            title = {expense.title} 
                            amount = {expense.amount} 
                            date = {expense.date}  
                        />
                        )
                    }
                return null;
            })}
        </Card>
        
    )
}

export default Expense;