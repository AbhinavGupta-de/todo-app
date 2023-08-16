import React, { useContext } from 'react';

import Task from './Task';
import { TodosContext } from '../../contexts/TodosContext';

const List = ({ filterString }) => {
	const todData = useContext(TodosContext);
	const { todos, closeTask, statusToggle } = todData;
	return (
		<>
			{todos.map((todo) => {
				if (filterString === 'All') {
					return (
						<Task
							todo={todo}
							statusToggle={statusToggle}
							closeTask={closeTask}
						/>
					);
				} else if (filterString === 'Active') {
					if (todo.completed === false) {
						return (
							<Task
								todo={todo}
								statusToggle={statusToggle}
								closeTask={closeTask}
							/>
						);
					}
				} else if (filterString === 'Completed') {
					if (todo.completed === true) {
						return (
							<Task
								todo={todo}
								statusToggle={statusToggle}
								closeTask={closeTask}
							/>
						);
					}
				}
			})}
		</>
	);
};

export default List;
