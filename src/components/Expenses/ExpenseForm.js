import { useState } from "react";
import './ExpenseForm.css';


const ExpenseForm = () =>{
    const [enterTitle,setEnterTitle] = useState('');
    const [enterAmount,setEnterAmount] = useState('');
    const [enterDate,setEnterDate] = useState('');

    const changeTitleHandler = (event) =>{
        setEnterTitle(event.target.value);
    }
    const changeAmountHandler = (event) =>{
        setEnterAmount(event.target.value);
    }
    const changeDateHandler = (event) =>{
        setEnterDate(event.target.value);

    }
    return(
        <form>
            <div className='new-expense'>
                <div className='new-expense__controls'>
                    <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' onChange={changeTitleHandler}/>
                    </div>
                    <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number'min='0.01' step='0.01' onChange={changeAmountHandler}/>
                    </div>
                    <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' min='2019-01-01' max='2022-12-31' onChange={changeDateHandler}/>
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