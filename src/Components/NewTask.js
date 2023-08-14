import React from 'react';

const NewTask = () => {
	return (
		<div className="task-container mb-7">
			<input type="checkbox" className="checkbox" />
			<input type="text" placeholder="Add a new task" className="tasks" />
		</div>
	);
};

export default NewTask;
