import { useEffect, useState } from 'react';
import Select from '../../ui-kit/Select';
import { useDispatch, useSelector } from 'react-redux';
import styles from '../../ui-kit/Select/Select.module.scss';
import { fetchAreas } from '../../redux/areas/areasOperations';
import { selectAreas } from '../../redux/areas/areasSelectors';
import { fetchIngredients } from '../../redux/ingredients/ingredientsOperatins';
import { selectIngredients } from '../../redux/ingredients/ingredientsSelectors';
// import { getRecipes } from '../../redux/recipes/recipesSelectors';

const RecipeFilters = ({ selectHendler, handleChange }) => {
  const dispatch = useDispatch();
  const area = useSelector(selectAreas);
  const ingredients = useSelector(selectIngredients);
  // const selectArrays = [area, ingredients];
  // console.log(areas);
  useEffect(() => {
    dispatch(fetchIngredients());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchAreas());
  }, [dispatch]);

  // const handleChange = event => {
  //   if (!event.nativeEvent.inputType) {
  //     event.target.blur();
  //   }
  // };
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
  //           selectHendler={selectHendler}
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
          onChange={handleChange}
          onClick={selectHendler}
          onFocus={selectHendler}
          placeholder="Area"
          id="Area"
          defaultValue=""
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
          onClick={selectHendler}
          onFocus={selectHendler}
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
