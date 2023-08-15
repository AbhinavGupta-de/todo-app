import React, { useState } from 'react';
import TaskList from './TaskList';
import NewTask from './NewTask';

const Hero = () => {
	const [todos, setTodos] = useState([]);

	const closeTask = (id) => {
		const updatedTodos = todos.filter((todo) => todo.id !== id);
		setTodos(updatedTodos);
	};

	const statusToggle = (id) => {
		const updatedTodos = todos.map((todo) => {
			if (todo.id === id) {
				todo.status = !todo.status;
			}
			return todo;
		});
		setTodos(updatedTodos);
	};

	if (todos.length === 0)
		return (
			<div className="mt-20 items-center flex flex-col w-auto">
				<div className="w-3/5">
					<NewTask addTask={setTodos} length={todos.length} />
				</div>
			</div>
		);

	return (
		<div className="mt-20 items-center flex flex-col w-auto">
			<div className="w-3/5">
				<NewTask addTask={setTodos} length={todos.length} />
			</div>
			<TaskList
				closeTask={closeTask}
				statusToggle={statusToggle}
				todos={todos}
			/>
		</div>
	);
};

export default Hero;
