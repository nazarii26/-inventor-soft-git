import React, { useState } from 'react';
import "./style.css";

export const AddForm = ({ onAddNewBook }) => {


	// const inputRef = useRef(null);
	const [book, setBook] = useState(() => ({
		isRead: false,
		title: "",
	}));
	// useEffect(() => {
	// 	if (inputRef && inputRef.current) {
	// 		inputRef.current.foucs();
	// 	}
	// }, []);

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
					}));
				}
			}}
		>
			<input
				//ref={inputRef}
				className="book-input"
				type="text"
				placeholder="Title of book"
				value={book.title}
				onChange={(e) => { //робить динамічним book.title, без цієї ф-ції не буде вводитись текст, бо title постійно буде ""
					setBook((prev) => ({ ...prev, title: e.target.value }));
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
