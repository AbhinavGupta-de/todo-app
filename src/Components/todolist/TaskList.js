import React from 'react';
import List from './List';
import ListOptions from './ListOptions';

// TODO Make the tasks deletable
// TODO Make the tasks moveable
// TODO Make the tasks reorderable
// TODO Make the tasks filterable
// TODO Make the number of tasks visible ---> 3 tasks left...

const TaskList = ({ closeTask, statusToggle, todos }) => {
	const [filterString, setFilterString] = React.useState('All');

	return (
		<div className="w-3/5">
			<div className="task-container">
				<ul className="bt-1 w-full text-left">
					<List
						todos={todos}
						filterString={filterString}
						closeTask={closeTask}
						statusToggle={statusToggle}
					/>

					<ListOptions todos={todos} setFilterString={setFilterString} />
				</ul>
			</div>
		</div>
	);
};

export default TaskList;
