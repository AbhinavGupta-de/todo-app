import React from 'react';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const ThemeChangeButton = ({ isDark, handleClick }) => {
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
