import React, { useState } from "react";
import BOOK_LIST from './store.json';
import { Books } from './components/Books';
import './style.css';

const App = () => {

	const [bookList, setBookList] = useState(BOOK_LIST);

	return (
		<div className="container">
			<Books data={bookList} />
		</div>
	);
};

export default App;