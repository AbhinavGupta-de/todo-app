import React, { useState } from 'react';

import NewTask from './NewTask';
import List from './List';

// TODO Make the tasks deletable
// TODO Make the tasks moveable
// TODO Make the tasks reorderable
// TODO Make the tasks filterable
// TODO Make the number of tasks visible ---> 3 tasks left...

const TaskList = () => {
	const [todos, setTodos] = useState([]);
	const [filterSting, setFilterString] = useState('all');

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
			<div className="w-3/5">
				<NewTask addTask={setTodos} length={todos.length} />
			</div>
		);

	return (
		<div className="w-3/5">
			<NewTask addTask={setTodos} length={todos.length} />
			<div className="task-container">
				<ul className="bt-1 w-full text-left">
					{todos.map((todo) => {
						return (
							<List
								todo={todo}
								closeTask={closeTask}
								statusToggle={statusToggle}
							/>
						);
					})}
					<li>
						<div className="list-options">
							<span>{todos.length} items left</span>
							<div className="flex flex-row justify-between">
								<button className="mr-2">All</button>
								<button className="mr-2">Active</button>
								<button>Completed</button>
							</div>
							<button>Clear Completed</button>
						</div>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default TaskList;
