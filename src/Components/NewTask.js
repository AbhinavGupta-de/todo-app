import React, { useContext } from 'react';
import { TaskContext } from '../Context/TaskContext';

const NewTask = () => {
	const data = useContext(TaskContext);

	const addTask = (e) => {
		setTasks([...tasks, e.target.value]);
	};
	return (
		<div className="task-container mb-7">
			<input type="checkbox" className="checkbox" />
			<input type="text" placeholder="Add a new task" className="tasks" />
		</div>
	);
};

export default NewTask;
