import React from 'react';
import ThemeChangeButton from './ThemeChangeButton';

const Header = () => {
	return (
		<header className="header">
			<h1 className="header-text">Task Forge</h1>
			<ThemeChangeButton />
		</header>
	);
};

export default Header;
