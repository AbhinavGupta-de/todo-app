import React from 'react';
import Header from './Components/header/Header';
import Hero from './Components/todolist/Hero';
import ThemeContextProvider from './contexts/ThemeContext';
import TodosContextProvider from './contexts/TodosContext';

const App = () => {
	return (
		// TODO Do something about changing the background color when we change the state

		<div className="items-center w-4/5 m-auto mt-10">
			<ThemeContextProvider>
				<TodosContextProvider>
					<Header />
					<Hero />
				</TodosContextProvider>
			</ThemeContextProvider>
		</div>
	);
};

export default App;
