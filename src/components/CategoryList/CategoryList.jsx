import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CategoriesItem from '../CategoriesItem';

import { selectCategories } from '../../redux/categories/categoriesSelectors.js';
import {
  fetchCategories,
  fetchMoreCategories,
} from '../../redux/categories/categoriesOperations.js';

import css from './CategoryList.module.scss';

const CategoryList = ({ handlerCategoryChoose }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const getMoreCategories = () => {
    const page = 2;
    dispatch(fetchMoreCategories(page));
  };

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
              handlerCategoryChoose={() => handlerCategoryChoose(category.name)}
            />
          </li>
        );
      })}
      {categories.length !== categoriesInfo.total && (
        <li className={css['category-item-11']}>
          <button
            type="button"
            onClick={getMoreCategories}
            className={css['category-btn']}
          >
            All categories
          </button>
        </li>
      )}
    </ul>
  );
};

export default CategoryList;
