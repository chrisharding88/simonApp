import React from 'react';
import './styles.css';

export const Circle = () => {
	return (
		<div className="center">
			<h1 id="gameTitle">SIMON</h1>
			<div className="gameFunction">
				<div id="round">00</div>
				<button id="start">START</button>
			</div>
		</div>
	);
};
