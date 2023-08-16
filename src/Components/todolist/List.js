import React from 'react';

import Task from './Task';

const List = ({ todos, statusToggle, closeTask, filterString }) => {
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
