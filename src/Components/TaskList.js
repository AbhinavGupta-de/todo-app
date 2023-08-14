import React from 'react';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CloseIcon from '@mui/icons-material/Close';

// TODO Make the tasks editable
// TODO Make the tasks deletable
// TODO Make the tasks checkable
// TODO Make the tasks moveable
// TODO Make the tasks reorderable
// TODO Make the tasks filterable
// TODO Make the number of tasks visible ---> 3 tasks left...

const TaskList = () => {
	return (
		<div className="task-container">
			<ul className="flex flex-col w-full">
				<li id="todo-list">
					<RadioButtonUncheckedIcon color="linear-gradient hsl(192, 100%, 67%) to hsl(280, 87%, 65%)" />
					<span>Task 1 Here</span>
					<CloseIcon id="close-icon" />
				</li>
				<li id="todo-list">Task 2</li>
				<li id="todo-list">Task 3</li>
			</ul>
		</div>
	);
};

export default TaskList;
