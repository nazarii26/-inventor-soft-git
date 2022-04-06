import React from 'react';
import './style.css';
import { Book } from '../book';

export const Books = (props) => {
	if (!props.data.length) return <p className="empty-store">Your bookstore is empty!</p>;

	return (
		<ul className="book-list">
			{props.data.map((book, idx) => {
				return <Book key={book.id} item={book} count={idx + 1} onRemoveBook={props.onRemoveBook} onReadBook={props.onReadBook}/>
			})}
		</ul>
	)
}
