import { useState } from "react";
import './ExpenseForm.css';


const ExpenseForm = (props) =>{
    const [enteredTitle,setEnteredTitle] = useState('');
    const [enteredAmount,setEnteredAmount] = useState('');
    const [enteredDate,setEnteredDate] = useState('');
    
    // const [userInput,setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // })

    // const changeTitleHandler = (event) =>{
    //     setUserInput({
    //         ...userInput,
    //         enteredTitle: event.target.value
    //     });
    // }
    // const changeAmountHandler = (event) =>{
    //     setUserInput({
    //         ...userInput,
    //         enteredAmount: event.target.value
    //     });
    // }
    // const changeDateHandler = (event) =>{
    //     setUserInput({
    //         ...userInput,
    //         enteredDate: event.target.value
    //     });


    const changeTitleHandler = (event) =>{
        setEnteredTitle(event.target.value);
    }
    const changeAmountHandler = (event) =>{
        setEnteredAmount(event.target.value);
    }
    const changeDateHandler = (event) =>{
        setEnteredDate(event.target.value);

    }

    const submitHandler = (event) =>{
        event.preventDefault();
        const enteredInput = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }
        props.onSaveExpenseData(enteredInput)
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');

    }
    return(
        <form onSubmit={submitHandler}>
            <div className='new-expense'>
                <div className='new-expense__controls'>
                    <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' onChange={changeTitleHandler} value={enteredTitle}/>
                    </div>
                    <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number'min='0.01' step='0.01' onChange={changeAmountHandler} value={enteredAmount}/>
                    </div>
                    <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' min='2019-01-01' max='2022-12-31' onChange={changeDateHandler} value={enteredDate}/>
                    </div>
                </div>
                <div className='new-expense__actions'>
                    <button type='submit'>Add Expense</button>
                </div>
            </div>
        </form>
    )
}

export default ExpenseForm;