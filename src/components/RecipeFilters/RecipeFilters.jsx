import { useSelector } from 'react-redux';
import styles from './RecipeFilters.module.scss';
import { selectAreas } from '../../redux/areas/areasSelectors';
import { selectIngredients } from '../../redux/ingredients/ingredientsSelectors';

const RecipeFilters = ({ handleChange }) => {
  const area = useSelector(selectAreas);
  const ingredients = useSelector(selectIngredients);

  return (
    <div className={styles.filterBox}>
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
    </div>
  );
};

export default RecipeFilters;
