import React, { useState } from 'react';

// TODO Rewrite the random id generator to be more efficient

const NewTask = ({ length, addTask }) => {
	const [task, setTask] = useState(null);

	const handleTask = (e) => {
		setTask(e.target.value);
	};

	const newTask = () => {
		if (task === null || task === '') return;
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
		<div style={{ marginBottom: '2rem' }}>
			<form
				onSubmit={(e) => e.preventDefault()}
				className="task-container"
				style={{ height: '25px' }}
			>
				<input
					type="text"
					placeholder="Add a new task..."
					className="tasks"
					style={{ fontSize: '18px' }}
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
