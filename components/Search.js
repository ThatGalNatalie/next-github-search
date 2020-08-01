import React, { useState } from 'react';
import Link from 'next/link';

function Search() {
  const [search, setSearch] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
  }

  function handleSearchInput(e) {
    setSearch(e.target.value);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type='search'
          aria-label='Search through site content'
          onChange={handleSearchInput}
        />
        <Link
          href={{
            pathname: '/results',
            query: {
              search,
            },
          }}
          as='/results'
        >
          <button>Search</button>
        </Link>
      </form>
    </div>
  );
}

export default Search;
