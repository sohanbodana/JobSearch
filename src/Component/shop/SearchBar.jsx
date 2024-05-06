import React from 'react';

const SearchBar = ({ searchQuery, handleSearch }) => {
  return (
    <div className="search-bar" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <input
        className="form-control mr-sm-2"
        type="search"
        placeholder="Search Jobs"
        aria-label="Search"
        value={searchQuery}
        onChange={handleSearch}
        style={{ border: '2px solid purple',width:"60%" }}
      />
    </div>

  );
};

export default SearchBar;
