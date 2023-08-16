import React, { useContext, useState } from 'react';
import TaskList from './TaskList';
import NewTask from './NewTask';
import { TodosContext } from '../../contexts/TodosContext';

const Hero = () => {
	const todData = useContext(TodosContext);
	const { todos, setTodos } = todData;

	if (todos.length === 0)
		return (
			<div className="hero">
				<div style={{ width: '60%' }}>
					<NewTask addTask={setTodos} length={todos.length} />
				</div>
			</div>
		);

	return (
		<div className="hero">
			<div style={{ width: '60%' }}>
				<NewTask addTask={setTodos} length={todos.length} />
			</div>
			<TaskList />
		</div>
	);
};

export default Hero;
