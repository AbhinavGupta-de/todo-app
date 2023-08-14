import React from 'react';
import NewTask from './NewTask';
import TaskList from './TaskList';

const Hero = () => {
	return (
		<div className="mt-20 items-center flex flex-col w-auto">
			<NewTask />
			<TaskList />
		</div>
	);
};

export default Hero;
