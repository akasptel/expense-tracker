import React, { useState } from 'react';
import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpenseList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
	var [filteredYear, setFilteredYear] = useState('2020');
	const filterChangeHandler = (selectedYear) => {
		setFilteredYear(selectedYear);
	};

	const filteredExpenses = props.expenses.filter(
		(expense) => expense.date.getFullYear().toString() === filteredYear
	);

	return (
		<div>
			<Card className="expenses">
				<ExpensesFilter
					selected={filteredYear}
					onFilterChange={filterChangeHandler}
				/>
				<ExpensesChart expenses={filteredExpenses} />
				<ExpenseList items={filteredExpenses} />
			</Card>
		</div>
	);
};

export default Expenses;
