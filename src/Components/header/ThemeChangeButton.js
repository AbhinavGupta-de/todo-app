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
		<div className="themechangebtn" onClick={handleClick}>
			{isDark ? (
				<LightModeIcon fontSize="large" />
			) : (
				<DarkModeIcon fontSize="large" />
			)}
		</div>
	);
};

export default ThemeChangeButton;
