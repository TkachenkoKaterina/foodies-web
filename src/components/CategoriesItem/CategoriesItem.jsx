// import { Link } from "react-router-dom";
import images from '../../assets/images/categories';
import icons from '../../assets/icons/icons.svg';

import css from './CategoriesItem.module.scss';

const CategoriesItem = ({ name, handlerCategoryChoose }) => {
  return (
    <>
      <img src={images[name]} alt={ name } className={css['category-img']} />
      <div className={css['category-info']}>
        <h3 className={css['category-title']}>{ name }</h3>
        <button type="button" onClick={ handlerCategoryChoose } className={css['category-btn']}>
          <svg width='18' height='18' className={css['category-icon']}>
            <use href={`${icons}#icon-arrow-up-right`}></use>
          </svg>
        </button>
      </div>                                                                         
    </>
  );
};

export default CategoriesItem;
