import { useEffect, useState } from 'react';
import Select from '../../ui-kit/Select';
import { useDispatch, useSelector } from 'react-redux';
import styles from '../../ui-kit/Select/Select.module.scss';
import { fetchAreas } from '../../redux/areas/areasOperations';
import { selectAreas } from '../../redux/areas/areasSelectors';
import { fetchIngredients } from '../../redux/ingredients/ingredientsOperatins';
import { selectIngredients } from '../../redux/ingredients/ingredientsSelectors';
// import { getRecipes } from '../../redux/recipes/recipesSelectors';

const RecipeFilters = ({ handleChange }) => {
  const area = useSelector(selectAreas);
  const ingredients = useSelector(selectIngredients);

  // return (
  //   <>
  //     {selectArrays?.map((arrayItem, index) => {
  //       let name;
  //       if (index === 0) {
  //         name = 'Area';
  //       } else {
  //         name = 'Ingredients';
  //       }
  //       return (
  //         <Select
  //           key={index}
  //           arrayOfObjects={arrayItem}
  //           placeholder={name}
  //           // selectHendler={selectHendler}
  //           // handleChange= {handleChange}
  //           ingredientIdHendler={ingredientIdHendler}
  //           areaHandler={areaHandler}
  //         />
  //       );
  //     })}
  //   </>
  // );

  return (
    <>
      <div className={styles.selectBox}>
        <input
          className={styles.input}
          type="input"
          list="area"
          placeholder="Area"
          id="Area"
          defaultValue=""
          onChange={handleChange}
        />
        <datalist id="area" className={styles.datalist}>
          {area.map(({ _id, name }) => (
            <option key={_id + name} id={_id}>
              {name}
            </option>
          ))}
        </datalist>
      </div>
      <div className={styles.selectBox}>
        <input
          className={styles.input}
          type="input"
          list="ingredients"
          onChange={handleChange}
          placeholder="Ingredients"
          id="Ingredients"
          defaultValue=""
        />
        <datalist id="ingredients" className={styles.datalist}>
          {ingredients.map(({ _id, name }) => (
            <option key={_id + name} id={_id}>
              {name}
            </option>
          ))}
        </datalist>
      </div>
    </>
  );
};

export default RecipeFilters;
