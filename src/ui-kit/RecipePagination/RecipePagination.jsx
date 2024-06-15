// import styles from './RecipePagination.module.scss';

// export const RecipePagination = ({ currentPage, totalPages, onPageChange }) => {
//   const maxPageButtons = 3;
//   let startPage = Math.max(currentPage - 1, 1);
//   let endPage = Math.min(startPage + maxPageButtons - 1, totalPages);

//   if (endPage - startPage < maxPageButtons - 1) {
//     startPage = Math.max(endPage - maxPageButtons + 1, 1);
//   }

//   const pageNumbers = Array.from(
//     { length: endPage - startPage + 1 },
//     (_, index) => startPage + index
//   );

//   return (
//     <nav className={styles.pagination}>
//       {pageNumbers.map(page => (
//         <button
//           key={page}
//           className={`${styles.paginationButton} ${
//             currentPage === page ? styles.active : ''
//           }`}
//           onClick={() => onPageChange(page)}
//         >
//           {page}
//         </button>
//       ))}
//     </nav>
//   );
// };
