import { Container, Back, MainTitle, Subtitle } from '../../ui-kit';
import { useEffect, useState } from 'react';
import RecipeList from '../ResipeList';
import RecipeFilters from '../RecipeFilters';
import { useDispatch, useSelector } from 'react-redux';
import { getRecipesInCategory } from '../../redux/recipes/recipesOperations';
import { getRecipes } from '../../redux/recipes/recipesSelectors';
import { fetchIngredients } from '../../redux/ingredients/ingredientsOperatins';
import { fetchAreas } from '../../redux/areas/areasOperations';
import { selectIngredients } from '../../redux/ingredients/ingredientsSelectors';
import icons from '../../assets/icons/icons.svg';
import styles from './Recipes.module.scss';

const Recipes = ({
  category,
  onClick,
  recipes,
  currentPage,
  handleChange,
  itemsPerPage,
  onPageChange,
  total,
}) => {
  return (
    <Container>
      {category && (
        <section className={styles.recipesSection}>
          <button className={styles.backButton} onClick={onClick}>
            <svg className={styles.icon}>
              <use
                href={`${icons}#icon-arrow-left`}
                width="16px"
                height="16px"
              />
            </svg>
            <span className={styles.text}>Back</span>
          </button>
          <MainTitle text={category} />
          <div className={styles.description}>
            <Subtitle text="Go on a taste journey, where every sip is a sophisticated creative chord, and every dessert is an expression of the most refined gastronomic desires." />
          </div>
          <div className={styles.filterContainer}>
            <RecipeFilters handleChange={handleChange} />
            <RecipeList
              recipes={recipes}
              itemsPerPage={itemsPerPage}
              currentPage={currentPage}
              onPageChange={onPageChange}
              total={total}
            />
          </div>
        </section>
      )}
    </Container>
  );
};
export default Recipes;
