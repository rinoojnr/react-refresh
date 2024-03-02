import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';

import './Expense.css'
import { useState } from 'react';
import ExpenseList from './ExpenseList';

const Expense = (props) =>{
    const [filteredYear,setFilteredYear] = useState('2020')

    const filterChangeHandler = (selectedYear) =>{  
        setFilteredYear(selectedYear);
    }
    const filteredArray = props.items.filter(expense => {
        return(expense.date.getFullYear().toString() === filteredYear);
    });

    return(
        <Card className="expenses">
            <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
            <ExpenseList items = {filteredArray} />   
        </Card>
    )
}

export default Expense;