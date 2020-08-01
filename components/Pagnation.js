import ReactPaginate from 'react-paginate';
function Pagnation() {
  return (
    <ReactPaginate
      marginPagesDisplayed={2}
      pageRangeDisplayed={5}
      previousLabel={'previous'}
      nextLabel={'next'}
      breakLabel={'...'}
      initialPage={1}
      pageCount={10}
    />
  );
}

export default Pagnation;
