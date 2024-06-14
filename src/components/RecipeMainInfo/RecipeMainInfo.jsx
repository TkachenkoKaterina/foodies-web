// import React from 'react';
// import styles from './RecipeMainInfo.module.scss';

// const RecipeMainInfo = ({ recipe }) => {
//   return (
//     <div className={styles.recipe_main_info}>
//       <div className={styles.thumb_wrap}>
//         <img src={recipe.thumb} alt={recipe.title} />
//       </div>
//       <div className={styles.recipe_details}>
//         <h3 className={styles.title}>{recipe.title}</h3>
//         <div className={styles.category_time}>
//           <p className={styles.category}>{recipe.category}</p>
//           <p className={styles.time}>{recipe.time} min</p>
//         </div>
//         <p className={styles.description}>{recipe.description}</p>
//         <button className={styles.author_button}>
//           <img src={recipe.author.image} alt={recipe.author.name} />
//           Created by: {recipe.author.name}
//         </button>
//       </div>
//     </div>
//   );
// };


import React from 'react';
import styles from './RecipeMainInfo.module.scss';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from '../../redux/auth/authSelectors';
import { getImagePath, TYPE_IMG } from '../../helpers/getImagePath';

const RecipeMainInfo = ({ recipe, navigatetoUserPage, navigateToSignIn }) => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const owner = recipe.owner;

  const handleClick = () => {
    if (isLoggedIn) {
      navigatetoUserPage();
    } else {
      navigateToSignIn();
    }
  };

  return (
    <div className={styles.recipe_main_info}>
      <div className={styles.thumb_wrap}>
        <img src={recipe.thumb} alt={recipe.title} />
      </div>
      <div className={styles.recipe_details}>
        <h3 className={styles.title}>{recipe.title}</h3>
        <div className={styles.category_time}>
          <p className={styles.category}>{recipe.category}</p>
          <p className={styles.time}>{recipe.time} min</p>
        </div>
        <p className={styles.description}>{recipe.description}</p>
        <button className={styles.author_button} type="button" onClick={handleClick}>
          <img className={styles.avatar} src={getImagePath(owner.avatar, TYPE_IMG.AVATAR)} alt="Avatar" />
          {/* <p className={styles.name}>{owner.name}</p> */}
          {/* Created by: {owner.name} */}
        </button>
      </div>
    </div>
  );
};

export default RecipeMainInfo;