import React from 'react';
import Header from './Components/header/Header';
import Hero from './Components/todolist/Hero';

const App = () => {
	const [isDark, setIsDark] = React.useState(true);

	const handleClick = () => {
		setIsDark(!isDark);
	};

	return (
		// TODO Do something about changing the background color when we change the state

		<div className="items-center w-4/5 m-auto mt-10">
			<Header isDark={isDark} handleClick={handleClick} />
			<Hero />
		</div>
	);
};

export default App;
