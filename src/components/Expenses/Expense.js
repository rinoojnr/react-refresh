import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import ExpenseFilter from './ExpenseFilter';

import './Expense.css'
import { useState } from 'react';

const Expense = (props) =>{
    const [filteredYear,setFilteredYear] = useState('2020')

    const filterChangeHandler = (selectedYear) =>{  
        setFilteredYear(selectedYear);
        console.log(filteredYear);
    }
    return(
        <Card className="expenses">
            <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
            {props.items.map((expense,index) =>{
                return(
                    <ExpenseItem 
                        // key = {expense.id}
                        key = {index}
                        title = {expense.title} 
                        amount = {expense.amount} 
                        date = {expense.date}  
                    />
                ) 
            })}
        </Card>
        
    )
}

export default Expense;