// ReviewList.js

import React from 'react';
import './reviewlist.css';

function ReviewList({ reviews }) {
  return (
    <div>
      <h2>Book Reviews</h2>
      <ul>
        {reviews.map((review, index) => (
          <li key={index}>
            <h3>{review.bookTitle}</h3>
            <p>Reviewer: {review.reviewerName}</p>
            <p>{review.reviewText}</p>
            {/* Add more review details here */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ReviewList;
