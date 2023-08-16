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
				todo.completed = !todo.completed;
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

	const clearCompleted = () => {
		setTodos((prevTodos) => {
			return prevTodos.filter((todo) => todo.completed === false);
		});
	};

	return (
		<div className="mt-20 items-center flex flex-col w-auto">
			<div className="w-3/5">
				<NewTask addTask={setTodos} length={todos.length} />
			</div>
			<TaskList
				closeTask={closeTask}
				statusToggle={statusToggle}
				todos={todos}
				clearCompleted={clearCompleted}
			/>
		</div>
	);
};

export default Hero;
