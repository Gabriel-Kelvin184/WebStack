import React, { useState, useEffect } from 'react';
import './App.css';
import SearchBar from './searchbar';
import ReviewForm from './reviewform';
import BookList from './booklist';
import ReviewList from './reviewlist';

const initialBooks = [
  { id: 1, title: 'Book 1', author: 'Author 1' },
  { id: 2, title: 'Book 2', author: 'Author 2' },
  // Add more book entries here
];

function App() {
  const [books, setBooks] = useState(initialBooks);
  const [searchQuery, setSearchQuery] = useState('');
  const [reviews, setReviews] = useState([]);

  const addReview = (newReview) => {
    setReviews([...reviews, newReview]);
  };

  useEffect(() => {
    // Replace with actual data fetching from an API or database
    // Example using mock data:
    setTimeout(() => {
      setBooks(initialBooks);
    }, 1000); // Simulate a delay
  }, []);

  return (
    <div className="App">
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <ReviewForm onReviewSubmit={addReview} />
      <BookList books={books} />
      <ReviewList reviews={reviews} />
    </div>
  );
}

export default App;
