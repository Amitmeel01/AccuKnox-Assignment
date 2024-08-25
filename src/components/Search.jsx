import React, { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';

function Search({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (typeof onSearch === 'function') {
      onSearch(searchQuery);
    } else {
      console.error('onSearch prop is not a function');
    }
  }, [searchQuery, onSearch]);

  return (
    <div className='bg-zinc-100 p-2 flex gap-4 items-center rounded-xl'>
      <FaSearch />
      <input
        type="text"
        className='bg-transparent hover:border-none hover:outline-none w-80 max-sm:w-64'
        placeholder='Search widgets...'
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
}

export default Search;
