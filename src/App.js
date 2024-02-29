import Expense from './components/Expenses/Expense';
import ExpenseForm from './components/Expenses/ExpenseForm';

function App() {
  const expenses = [
    { 
      id: 'e1',
      title: 'car insurance', 
      amount: 849,
      date: new Date(2024, 1, 26),
      LocationOfExpenditure: 'Bangalore'
    },
    { 
      id: 'e2',
      title: 'bike insurance', 
      amount: 895,
      date: new Date(2021, 1, 26),
      LocationOfExpenditure: 'Africa'
    },
    { 
      id: 'e3',
      title: 'Bike', 
      amount: 8935,
      date: new Date(2026, 1, 26),
      LocationOfExpenditure: 'Kerala'
    },
    { 
      id: 'e4',
      title: 'Grocerry', 
      amount: 45,
      date: new Date(2024, 1, 26),
      LocationOfExpenditure: 'Calicut'
    }
  ];
  // const arr = [];
  // for(let i=0;i<expenses.length;i++){
  //       arr.push(<Expense item={expenses} />)
  // }
  return (
    <div className="App">
      <h2>Let's get started</h2>
      <ExpenseForm />
      <div><Expense items={expenses} /></div>
      {/* <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date} LocationOfExpenditure={expenses[0].LocationOfExpenditure}></ExpenseItem>
      <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date} LocationOfExpenditure={expenses[1].LocationOfExpenditure}></ExpenseItem>
      <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date} LocationOfExpenditure={expenses[2].LocationOfExpenditure}></ExpenseItem>
      <ExpenseItem title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date} LocationOfExpenditure={expenses[3].LocationOfExpenditure}></ExpenseItem> */}
    </div>
  );
}

export default App;
