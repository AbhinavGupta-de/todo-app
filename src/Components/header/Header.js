import React from 'react';
import ThemeChangeButton from './ThemeChangeButton';

const Header = ({ isDark, handleClick }) => {
	return (
		<header className="flex justify-between items-center">
			<h1 className="text-center font-bold text-6xl">Task Forge</h1>
			<ThemeChangeButton isDark={isDark} handleClick={handleClick} />
		</header>
	);
};

export default Header;
