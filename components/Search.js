import React, { useState } from 'react';
import Link from 'next/link';

import styles from '../styles/Search.module.css';

function Search() {
  const [search, setSearch] = useState('react');

  function handleSubmit(e) {
    e.preventDefault();
    console.log(search);
  }

  function handleSearchInput(e) {
    setSearch(e.target.value);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <section className={styles.container}>
          <input
            className={styles.search_bar}
            onChange={handleSearchInput}
            name='search_bar'
            type='search'
            placeholder='Search...'
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
            <button className={styles.submit_btn}>🚀</button>
          </Link>
        </section>
      </form>
    </div>
  );
}

export default Search;
