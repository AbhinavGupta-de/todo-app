import React, { useContext } from 'react';
import { TodosContext } from '../../contexts/TodosContext';

const ListOptions = ({ setFilterString, filterString }) => {
	const todData = useContext(TodosContext);
	const { todos, clearCompleted } = todData;

	const handleClick = (e) => {
		e.target.className = 'active';
		setFilterString(e.target.innerText);
	};
	return (
		<li className="mt-2">
			<div className="list-options">
				<span>{todos.length} items left</span>
				<div className="flex flex-row justify-between gap-3">
					<button
						className={`${
							filterString === 'All' && 'text-[#0384fc] font-bold'
						}`}
						onClick={handleClick}
					>
						All
					</button>
					<button
						className={`${
							filterString === 'Active' && 'text-[#0384fc] font-bold'
						}`}
						onClick={handleClick}
					>
						Active
					</button>
					<button
						className={`${
							filterString === 'Completed' && 'text-[#0384fc] font-bold'
						}`}
						onClick={handleClick}
					>
						Completed
					</button>
				</div>
				<button onClick={clearCompleted}>Clear Completed</button>
			</div>
		</li>
	);
};

export default ListOptions;
