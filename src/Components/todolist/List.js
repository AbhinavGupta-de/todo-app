import React from 'react';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CloseIcon from '@mui/icons-material/Close';

const List = ({ todo, statusToggle, closeTask }) => {
	const statusToggleHandler = () => {
		statusToggle(todo.id);
	};

	const closeTaskHandler = () => {
		closeTask(todo.id);
	};

	return (
		<li key={todo.id} id="todo-list">
			<div className="flex flex-row justify-between">
				<div onClick={statusToggleHandler} className="mr-2">
					{todo.status ? <CheckCircleIcon /> : <RadioButtonUncheckedIcon />}
				</div>
				{todo.description}
			</div>
			<button onClick={closeTaskHandler}>
				<CloseIcon id="close-icon" />
			</button>
		</li>
	);
};

export default List;
