function ExpenseItem(props) {
    const month = props.date.toLocaleString('en-US', { month: 'long' });
    const day = props.date.toLocaleString('en-US', { day: '2-digit' });
    const year = props.date.getFullYear();


    return ( 
        <div className="expense-item">
            <div>
                <div>{ month }</div>
                <div>{ day }</div>
                <div>{ year }</div>
            </div>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
            </div>
            <div className="expense-item__price">
                <div><h2>${props.amount}</h2></div>
            </div>
            <div className="expense-item__location">
                <h2>{props.LocationOfExpenditure}</h2>
            </div>
        </div>
    )
}

export default ExpenseItem;