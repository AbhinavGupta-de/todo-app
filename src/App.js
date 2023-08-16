import React from 'react';
import Header from './Components/header/Header';
import Hero from './Components/todolist/Hero';
import ThemeContextProvider from './contexts/ThemeContext';
import TodosContextProvider from './contexts/TodosContext';
import Footer from './Components/footer/Footer';

const App = () => {
	return (
		// TODO Do something about changing the background color when we change the state

		<div className="App">
			<ThemeContextProvider>
				<TodosContextProvider>
					<Header />
					<Hero />
					<Footer />
				</TodosContextProvider>
			</ThemeContextProvider>
		</div>
	);
};

export default App;
