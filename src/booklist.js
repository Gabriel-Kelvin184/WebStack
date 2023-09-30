// BookList.js

import React from 'react';
import './booklist.css';

function BookList({ books }) {
  return (
    <div>
      <h2>Book List</h2>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <h3>{book.title}</h3>
            <p>Author: {book.author}</p>
            {/* Add more book details here */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookList;
