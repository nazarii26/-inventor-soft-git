import React, { useState } from "react";
import BOOK_LIST from './store.json';
import { Books } from './components/Books';
import './style.css';

const App = () => {

	const [bookList, setBookList] = useState(BOOK_LIST);

	const removeBook = (id) => {
		//setBookList(bookList.filter(book => book.id !== id)); // II варіант як створити функціонал видалення item. Якщо айді не співпадає з айді, який прилітає, то відфільтровуємо
		setBookList((prevState) => prevState.filter(book => book.id !== id));    //prevState - масив, який знаходиться у попередньому стані.

	};

	const onReadBook = id => {
		const idx = bookList.findIndex((item) => item.id === id);

		setBookList((prevState) => [
			...prevState.slice(0, idx),
			{ ...prevState[idx], isRead: !prevState[idx].isRead },
			...prevState.slice(idx + 1),
		]);

	}



	return (
		<div className="container">
			<Books data={bookList} onRemoveBook={removeBook} onReadBook={onReadBook} />
		</div>
	);
};

export default App;