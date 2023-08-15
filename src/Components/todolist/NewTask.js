import React, { useState } from 'react';

// TODO Rewrite the random id generator to be more efficient

const NewTask = ({ length, addTask }) => {
	const [task, setTask] = useState(null);

	const handleTask = (e) => {
		setTask(e.target.value);
	};

	const newTask = () => {
		if (task === null) return;
		if (task.trim !== '') {
			const newTodo = {
				id: length + 1,
				description: task,
				completed: false,
			};

			addTask((prevTodos) => {
				return [...prevTodos, newTodo];
			});
			setTask('');
		} else {
			alert('Please enter a task');
		}
	};

	return (
		<div className="mb-7">
			<form onSubmit={(e) => e.preventDefault()} className="task-container">
				<input type="checkbox" className="checkbox" />
				<input
					type="text"
					placeholder="Add a new task..."
					className="tasks"
					value={task}
					onChange={handleTask}
				/>
				<button className="inline" onClick={newTask}>
					Add Task
				</button>
			</form>
		</div>
	);
};

export default NewTask;
