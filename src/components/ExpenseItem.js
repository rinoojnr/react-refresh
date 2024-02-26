function ExpenseItem() {
    const expenseDate = new Date(2024, 1, 26);
    const expenseTitle = 'Car insurance';
    const expenseAmount = 290;
    const LocationOfExpenditure = 'Bangalore';
    return ( 
        <div className="expense-item">
            <div><h2>{expenseDate.toISOString()}</h2></div>
            <div className="expense-item__description">
                <h2>{expenseTitle}</h2>
            </div>
            <div className="expense-item__price">
                <div><h2>${expenseAmount}</h2></div>
            </div>
            <div className="expense-item__location">
                <h2>{LocationOfExpenditure}</h2>
            </div>
        </div>
    )
}

export default ExpenseItem;