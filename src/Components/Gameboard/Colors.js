import React from 'react';
import './styles.css';
import { Circle } from './Circle';

export const Colors = () => {
	return (
		<div className="container">
			<div className="gameBoard">
				<div className="row1">
					<div className="gameButton green" />
					<div className="gameButton red" />
				</div>
				<div className="row2">
					<div className="gameButton yellow" />
					<div className="gameButton blue" />
				</div>
				<Circle />
			</div>
		</div>
	);
};
