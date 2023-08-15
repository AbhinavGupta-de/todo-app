import React from 'react';

const ListOptions = ({ todos, setFilterString }) => {
	const handleClick = (e) => {
		setFilterString(e.target.innerText);
	};
	return (
		<li className="mt-2">
			<div className="list-options">
				<span>{todos.length} items left</span>
				<div className="flex flex-row justify-between">
					<button className="mr-2" onClick={handleClick}>
						All
					</button>
					<button className="mr-2" onClick={handleClick}>
						Active
					</button>
					<button onClick={handleClick}>Completed</button>
				</div>
				<button>Clear Completed</button>
			</div>
		</li>
	);
};

export default ListOptions;
