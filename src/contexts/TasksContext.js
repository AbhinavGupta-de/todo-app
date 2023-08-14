import React from 'react';

export const TasksContext = React.createContext();

const TasksContextProvider = (props) => {
	state = {
		tasks: [{ id: 1, status: 'open', description: 'description 1' }],
	};

	addNewTask = (task) => {
		this.setState({
			tasks: [...this.state.tasks, task.id, task.status, task.description],
		});
	};
	return (
		<TasksContext.Provider value={{ ...state }}>
			{props.children}
		</TasksContext.Provider>
	);
};
