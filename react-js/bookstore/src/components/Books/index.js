import React from 'react';
import './style.css';
import { Book } from '../book';

export const Books = (props) => {
	return (
		<ul className="book-list">
			{props.data.map((book, idx) => {
				return <Book key={book.id} item={book} count={idx + 1} />
			})}
		</ul>
	)
}
