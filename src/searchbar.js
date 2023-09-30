// SearchBar.js

import React from 'react';
import './searchbar.css';

function SearchBar({ searchQuery, setSearchQuery }) {
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search books..."
        value={searchQuery}
        onChange={handleSearch}
      />
      <button>Search</button>
    </div>
  );
}

export default SearchBar;
