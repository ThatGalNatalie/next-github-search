import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import ResultCard from '../components/ResultCard';
import ReactPaginate from 'react-paginate';

import styles from '../styles/Results.module.css';

function Results({ data }) {
  const router = useRouter();
  const { total_count, items } = data;

  function handlePagination(page) {
    const { selected } = page;
    const path = router.pathname;
    const currentQuery = { ...router.query };
    currentQuery.page = selected + 1;

    router.push({
      pathname: path,
      query: currentQuery,
    });
  }

  if (items !== undefined) {
    return (
      <div>
        <h1 className={styles.count}>Total: {total_count}</h1>
        <Link href='/'>
          <a className={styles.count}>Back to search</a>
        </Link>

        <div className={styles.container}>
          {items.map((item) => {
            return (
              <div key={item.id}>
                <ResultCard item={item} />
              </div>
            );
          })}
        </div>

        <ReactPaginate
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          previousLabel={'previous'}
          nextLabel={'next'}
          breakLabel={'...'}
          initialPage={0}
          pageCount={total_count}
          onPageChange={handlePagination}
          containerClassName={styles.paginate_wrap}
          pageClassName={styles.paginate_li}
          pageLinkClassName={styles.paginate_a}
          activeLinkClassName={styles.paginate_active}
        />
      </div>
    );
  } else {
    return (
      <div>
        <h1>{data.message}</h1>
        <Link href='/'>
          <a className={styles.count}>Back to search</a>
        </Link>
      </div>
    );
  }
}
Results.getInitialProps = async ({ query }) => {
  const search = query.search;
  const page = query.page || 1;
  const res = await fetch(
    `https://api.github.com/search/repositories?q=${search}&page=${page}&per_page=10`
  );
  const data = await res.json();
  return {
    data,
  };
};

export default Results;
