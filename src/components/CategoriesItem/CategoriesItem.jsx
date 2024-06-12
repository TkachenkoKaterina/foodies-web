// import { Link } from "react-router-dom";

import images from '../../assets/images/categories';

import css from './CategoriesItem.module.scss';

const CategoriesItem = ({ name, hendlerCategoryChoose }) => {
  return (
    <>
      <button type="button" onClick={hendlerCategoryChoose}>
        <img src={images[name]} alt={name} className={css['categories-img']} />
      </button>
      {/* <h3>{ name }</h3>
            <Link></Link> */}
    </>
  );
};

export default CategoriesItem;
