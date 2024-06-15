import ReactPaginate from 'react-paginate';
import styles from './ListPagination.module.scss';

function ListPagination({ total, itemsPerPage, currentPage, onPageChange }) {
  const pageCount = Math.ceil(total / itemsPerPage);

  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="  "
      pageCount={pageCount}
      initialPage={currentPage - 1}
      onPageChange={onPageChange}
      pageRangeDisplayed={2}
      marginPagesDisplayed={1}
      previousLabel="  "
      renderOnZeroPageCount={null}
      containerClassName={styles.pagination}
      pageClassName={styles.page}
      activeClassName={styles.page_active}
    />
  );
}

export default ListPagination;
