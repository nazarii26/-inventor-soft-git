import React from 'react';
import './style.css';

export const StatisticBoard = ({
	all,
	readBooks,
	notReadBooks,
	onRemoveAll,
}) => {
	return (

		<div className="statistics-board">
			<div className="statistics-data">
				<span className="all">All: {all}</span>
				<span className="read">Read: {readBooks}</span>
				<span className="not-read">Not read: {notReadBooks}</span>
			</div>
			<button className="remove-button" onClick={onRemoveAll}>
				Remove all
			</button>
		</div>

	);
};
