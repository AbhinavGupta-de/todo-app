import React, { useContext } from 'react';
import { TodosContext } from '../../contexts/TodosContext';

const ListOptions = ({ setFilterString, filterString }) => {
	const todData = useContext(TodosContext);
	const { todos, clearCompleted } = todData;

	const handleClick = (e) => {
		setFilterString(e.target.innerText);
	};
	return (
		<li style={{ marginTop: '2px' }}>
			<div className="list-options">
				{todos.length} items left
				<div className="list-options-btn-container">
					<button
						className={`${
							filterString === 'All' ? 'list-options-btn inline' : 'inline'
						}`}
						onClick={handleClick}
					>
						All
					</button>
					<button
						className={`${
							filterString === 'Active' ? 'list-options-btn inline' : 'inline'
						}`}
						onClick={handleClick}
					>
						Active
					</button>
					<button
						className={`${
							filterString === 'Completed'
								? 'list-options-btn inline'
								: 'inline'
						}`}
						onClick={handleClick}
					>
						Completed
					</button>
				</div>
				<button onClick={clearCompleted} className="inline">
					Clear Completed
				</button>
			</div>
		</li>
	);
};

export default ListOptions;
