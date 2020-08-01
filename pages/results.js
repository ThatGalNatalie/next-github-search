import { useRouter } from 'next/router';
import { useAPI } from '../hooks/useApi';

import ResultCard from '../components/ResultCard';
import ReactPaginate from 'react-paginate';

import styles from '../styles/Results.module.css';

function Results({ data }) {
  const router = useRouter();
  const { search } = router.query;
  // const [data, error, retry] = useAPI(search);
  const { total_count, items } = data;

  const isEmpty = (obj) => Object.keys(obj).length === 0;

  function handlePagination(page) {
    const { selected } = page;
    const path = router.pathname;
    const currentQuery = { ...router.query };
    currentQuery.page = selected + 1;

    router.push({
      pathname: path,
      query: currentQuery,
    });

    // retry(selected);
  }

  // if (error) return <div>oh no! something went wrong</div>;

  if (isEmpty(data)) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <h1>Total Results: {total_count}</h1>
        {items.map((item) => {
          return (
            <div key={item.id}>
              <ResultCard item={item} />
            </div>
          );
        })}
        <ReactPaginate
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          previousLabel={'previous'}
          nextLabel={'next'}
          breakLabel={'...'}
          initialPage={0}
          pageCount={total_count}
          onPageChange={handlePagination}
          containerClassName={styles.paginateWrap}
          pageClassName={styles.paginateLi}
        />
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
