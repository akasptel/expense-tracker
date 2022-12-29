import React, {useState} from 'react';
import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) => {
	var [filteredYear, setFilteredYear] = useState('2020');
	const filterChangeHandler = (selectedYear) =>{
		setFilteredYear(selectedYear);
		console.log(filteredYear);
	}

	return (
		<div>
			<Card className="expenses">
				<ExpensesFilter selected={filteredYear} onFilterChange={filterChangeHandler}/>
				{props.expenses.map(expense => 
				<ExpenseItem
					key = {expense.id}
					title={expense.title}
					amount={expense.amount}
					date={expense.date}
				/>)}
			</Card>
		</div>
	);
};

export default Expenses;
