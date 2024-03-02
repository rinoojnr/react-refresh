import { useState } from 'react';
import Expense from './components/Expenses/Expense';
import ExpenseForm from './components/Expenses/ExpenseForm';

const DUMMY_DATA = [
  { 
    id: 'e1',
    title: 'car insurance', 
    amount: 849,
    date: new Date(2020 , 1, 26),
    LocationOfExpenditure: 'Bangalore'
  },
  { 
    id: 'e2',
    title: 'bike insurance', 
    amount: 895,
    date: new Date(2020, 1, 26),
    LocationOfExpenditure: 'Africa'
  },
  { 
    id: 'e3',
    title: 'Bike', 
    amount: 8935,
    date: new Date(2021, 1, 26),
    LocationOfExpenditure: 'Kerala'
  },
  { 
    id: 'e4',
    title: 'Grocerry', 
    amount: 45,
    date: new Date(2022, 1, 26),
    LocationOfExpenditure: 'Calicut'
  }
];

function App() {

  const [expenses,setExpenses] = useState(DUMMY_DATA);

  const saveExpenseDataHandler = (enteredExpenseData) =>{
    console.log(enteredExpenseData)
      setExpenses((previousExpense)=>{
        return [...previousExpense,enteredExpenseData]
      })
  }
  return (
    <div className="App">
      <h2>Let's get started</h2>
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
      <div><Expense items={expenses} /></div> 
    </div>
  );
}

export default App;
