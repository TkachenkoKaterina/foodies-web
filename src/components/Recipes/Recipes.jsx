import { IconButton, MainTitle, Subtitle } from '../../ui-kit';
import { useState } from 'react';
import RecipeList from '../ResipeList';
import RecipeFilters from '../RecipeFilters';

const Recipes = ({ category = 'Dessert' }) => {
  const [isRender, setIsRender] = useState(category);
  let recipes;
  const goToCategory = e => {
    e.preventDefault();
    setIsRender(false);
  };

  return (
    <>
      {isRender && (
        <div className="">
          <IconButton icon="icon-arrow-left" onClick={goToCategory} />
          <MainTitle text={category} />
          <Subtitle text="Go on a taste journey, where every sip is a sophisticated creative chord, and every dessert is an expression of the most refined gastronomic desires." />
          <RecipeFilters />
          <RecipeList recipes={recipes} />
          {/* <RecipePagination/> */}
        </div>
      )}
    </>
  );
};
export default Recipes;
