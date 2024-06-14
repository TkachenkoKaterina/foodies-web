import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './RecipeIngredients.module.scss';

const RecipeIngredients = ({ ingredients }) => {
  const [ingredientsDetails, setIngredientsDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchIngredientsDetails = async () => {
      try {
        const ingredientIds = ingredients.map(ingredient => ingredient.id);
        const response = await axios.get(`https://foodies-1u0q.onrender.com/api/ingredients?ids=${ingredientIds.join(',')}`);
        const allIngredients = response.data;

        const enrichedIngredients = ingredients.map(ingredient => {
          const detail = allIngredients.find(item => item._id === ingredient.id);
          return {
            ...detail,
            measure: ingredient.measure
          };
        });

        setIngredientsDetails(enrichedIngredients);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchIngredientsDetails();
  }, [ingredients]);

  if (loading) {
    return <div>Loading ingredients...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
  <div className={styles.ingredients_wrap}>
    <h3 className={styles.title}>INGREDIENTS</h3>
    <div className={styles.ingredients_list_wrap}>
      <ul className={styles.ingredients_list}>
        {ingredientsDetails.map((ingredient, index) => (
          <li key={index} className={styles.ingredient_item}>
            <div className={styles.ingredient_image}>
              <img 
                src={ingredient.img}
                alt={ingredient.name}
              />
            </div>
            <div className={styles.ingredient_info}>
              <span className={styles.ingredient_name}>{ingredient.name}</span>
              <span className={styles.ingredient_measure}>{ingredient.measure}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </div>
);
};

export default RecipeIngredients;

