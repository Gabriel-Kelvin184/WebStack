// ReviewForm.js

import React, { useState } from 'react';
import './reviewform.css'

function ReviewForm({ onReviewSubmit }) {
  const [review, setReview] = useState({
    bookTitle: '',
    author: '',
    reviewerName: '',
    reviewText: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setReview({ ...review, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onReviewSubmit(review); // Send the review data to the parent component
    setReview({
      bookTitle: '',
      author: '',
      reviewerName: '',
      reviewText: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          name="bookTitle"
          placeholder="Book Title"
          value={review.bookTitle}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <input
          type="text"
          name="author"
          placeholder="Author"
          value={review.author}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <input
          type="text"
          name="reviewerName"
          placeholder="Your Name"
          value={review.reviewerName}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <textarea
          name="reviewText"
          placeholder="Write your review..."
          value={review.reviewText}
          onChange={handleInputChange}
        ></textarea>
      </div>
      <button type="submit">Submit Review</button>
    </form>
  );
}

export default ReviewForm;
