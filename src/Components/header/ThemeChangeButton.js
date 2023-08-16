import React, { useContext } from 'react';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { ThemeContext } from '../../contexts/ThemeContext';

const ThemeChangeButton = () => {
	const theme = useContext(ThemeContext);
	const { isDark, setIsDark } = theme;

	const handleClick = () => {
		setIsDark((prev) => !prev);
	};

	return (
		<div>
			<button onClick={handleClick}>
				{isDark ? (
					<LightModeIcon fontSize="large" />
				) : (
					<DarkModeIcon fontSize="large" />
				)}
			</button>
		</div>
	);
};

export default ThemeChangeButton;
