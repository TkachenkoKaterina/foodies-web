// import { Link } from "react-router-dom";
import images from '../../assets/images/categories';
import icons from '../../assets/icons/icons.svg';

import styles from './CategoriesCard.module.scss';

const CategoriesItem = ({ name, handlerCategoryChoose }) => {
  return (
    <>
      <img src={images[name]} alt={name} className={styles['category-img']} />
      <div className={styles['category-info']} id={name}>
        <h3 className={styles['category-title']}>{name}</h3>
        <button
          type="button"
          onClick={handlerCategoryChoose}
          className={styles['category-btn']}
        >
          <svg width="18" height="18" className={styles['category-icon']}>
            <use href={`${icons}#icon-arrow-up-right`}></use>
          </svg>
        </button>
      </div>
    </>
  );
};

export default CategoriesItem;
