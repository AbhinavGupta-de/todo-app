import React from 'react';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CloseIcon from '@mui/icons-material/Close';

const Task = ({ todo, statusToggle, closeTask }) => {
	const statusToggleHandler = () => {
		statusToggle(todo.id);
	};

	const closeTaskHandler = () => {
		closeTask(todo.id);
	};

	return (
		<li key={todo.id} id="todo-list">
			<div className="task">
				<div onClick={statusToggleHandler} style={{ marginRight: '8px' }}>
					{todo.completed ? <CheckCircleIcon /> : <RadioButtonUncheckedIcon />}
				</div>
				{todo.completed ? (
					<del style={{ color: '#707280' }}>{todo.description}</del>
				) : (
					todo.description
				)}
			</div>
			<button onClick={closeTaskHandler} className="inline">
				<CloseIcon id="close-icon" />
			</button>
		</li>
	);
};

export default Task;
