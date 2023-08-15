import React from 'react';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CloseIcon from '@mui/icons-material/Close';
import NewTask from './NewTask';

// TODO Make the tasks editable
// TODO Make the tasks deletable
// TODO Make the tasks checkable
// TODO Make the tasks moveable
// TODO Make the tasks reorderable
// TODO Make the tasks filterable
// TODO Make the number of tasks visible ---> 3 tasks left...

const TaskList = () => {
	return (
		<div className="w-3/5">
			<NewTask />
			<div className="task-container">
				<ul className="bt-1">
					<li>Task here</li>
				</ul>
			</div>
		</div>
	);
};

export default TaskList;
