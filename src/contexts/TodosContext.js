import React from 'react';

export const TodosContext = React.createContext();

const TodosContextProvider = ({ children }) => {
	const [todos, setTodos] = React.useState([]);

	const closeTask = (id) => {
		const updatedTodos = todos.filter((todo) => todo.id !== id);
		setTodos(updatedTodos);
	};

	const statusToggle = (id) => {
		const updatedTodos = todos.map((todo) => {
			if (todo.id === id) {
				todo.completed = !todo.completed;
			}
			return todo;
		});
		setTodos(updatedTodos);
	};

	const clearCompleted = () => {
		setTodos((prevTodos) => {
			return prevTodos.filter((todo) => todo.completed === false);
		});
	};

	return (
		<TodosContext.Provider
			value={{ todos, setTodos, closeTask, statusToggle, clearCompleted }}
		>
			{children}
		</TodosContext.Provider>
	);
};

export default TodosContextProvider;
