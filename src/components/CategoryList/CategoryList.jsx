import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CategoriesItem from '../CategoriesItem';

import { selectCategories } from '../../redux/categories/categoriesSelectors.js';
import { fetchCategories } from '../../redux/categories/categoriesOperations.js';

import css from './CategoryList.module.scss';

const CategoryList = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCategories());
    }, [dispatch]);

    const categories = useSelector(selectCategories);

    return (
        <ul className={css['category-list']}>
            {categories.map((category, index) => {
                return (
                    <li key={`${category}`} className={css[`category-item-${index}`]}>
                        <CategoriesItem name={category.name} />
                    </li>
                );
            })}
        </ul>
    );
};

export default CategoryList;