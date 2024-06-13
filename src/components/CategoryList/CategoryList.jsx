import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CategoriesItem from '../CategoriesItem';

import { selectCategories } from '../../redux/categories/categoriesSelectors.js';
import { fetchCategories } from '../../redux/categories/categoriesOperations.js';

import css from './CategoryList.module.scss';

const CategoryList = ({ handlerCategoryChoose }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const categoriesInfo = useSelector(selectCategories);
  const categories = categoriesInfo.result;

  return (
    <ul className={css['category-list']}>
      {categories.map((category, index) => {
        return (
          <li
            key={`${category}+${index}`}
            className={css[`category-item-${index}`]}
          >
            <CategoriesItem
              name={category.name}
              handlerCategoryChoose={handlerCategoryChoose}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default CategoryList;
