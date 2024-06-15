import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import styles from './ListPagination.module.scss';

// const itemsData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

// function PaginatedItems({ currentItems }) {
//   return (
//     <>
//       {currentItems &&
//         currentItems.map(item => (
//           <div key={item}>
//             <h3>Item #{item}</h3>
//           </div>
//         ))}
//     </>
//   );
// }

function ListPagination({ itemsPerPage = 9 }) {
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = itemsData.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(itemsData.length / itemsPerPage);

  const handlePageClick = event => {
    const newOffset = (event.selected * itemsPerPage) % itemsData.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <PaginatedItems currentItems={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel="  "
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        marginPagesDisplayed={1}
        pageCount={pageCount}
        previousLabel="  "
        renderOnZeroPageCount={null}
        currentPage={styles.current_page}
        containerClassName={styles.pagination}
        pageClassName={styles.page}
        activeClassName={styles.page_active}
        disabledClassName={styles.page_disabled}
      />
    </>
  );
}

export default ListPagination;
