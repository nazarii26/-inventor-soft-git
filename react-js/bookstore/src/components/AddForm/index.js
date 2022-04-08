import React, { useState } from 'react';
import "./style.css";

export const AddForm = ({ onAddNewBook }) => {

	const [book, setBook] = useState(() => ({
		isRead: false,
		title: "",
		description: ""
	}));
	console.log(book);
	
	return (
		<form
			className="book-form"
			onSubmit={(e) => {
				e.preventDefault(); // запобігає оновленню усієї сторінки
				if (book.title.length) {
					onAddNewBook(book);
					setBook(() => ({ // після того, як добавить книгу, очищає форму
						isRead: false,
						title: "",
						description: ""
					}));
				}
			}}
		>

			<input
				
				className="book-input"
				type="text"
				placeholder="Title of book"
				value={book.title}
				onChange={(e) => { //робить динамічним book.title, без цієї ф-ції не буде вводитись текст, бо title постійно буде ""
					setBook((prev) => ({ ...prev, title: e.target.value }));
				}}
			/>

			<input
				
				className="book-input-description"
				type="text"
				placeholder="Description"
				value={book.description}
				onChange={(e) => { //робить динамічним book.title, без цієї ф-ції не буде вводитись текст, бо title постійно буде ""
					setBook((prev) => ({ ...prev, description: e.target.value }));
				}}
			/>
			<button
				className="book-button pointer"
				type="submit">
				Add new book
			</button>
			
		</form>
	)
};
