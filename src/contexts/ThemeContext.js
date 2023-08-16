import React, { createContext, useEffect, useState } from 'react';

export const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
	const [isDark, setIsDark] = useState(localStorage.isDark);
	useEffect(() => {
		if (isDark) {
			document.getElementById('root').classList.add('dark');
		} else {
			document.getElementById('root').classList.remove('dark');
		}
		localStorage.setItem('isDark', isDark);
	}, [isDark]);

	return (
		<ThemeContext.Provider value={{ isDark, setIsDark }}>
			{children}
		</ThemeContext.Provider>
	);
};

export default ThemeContextProvider;
