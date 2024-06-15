import { useState, useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import styles from './AddRecipeForm.module.scss';
import icons from '../../assets/icons/icons.svg';
import { selectCategories } from '../../redux/categories/categoriesSelectors';
import { fetchCategories } from '../../redux/categories/categoriesOperations';
import { selectAreas } from '../../redux/areas/areasSelectors';
import { fetchAreas } from '../../redux/areas/areasOperations';
import { fetchIngredients } from '../../redux/ingredients/ingredientsOperatins';
import { selectIngredients } from '../../redux/ingredients/ingredientsSelectors';
import { recipeApi } from '../../services/Api';
import TextareaAutosize from 'react-textarea-autosize';

const AddRecipeForm = () => {
  const dispatch = useDispatch();
  const categories = useSelector(selectCategories);
  const areas = useSelector(selectAreas);
  const ingredientsAll = useSelector(selectIngredients);
  const { register, handleSubmit, reset, watch, setValue } = useForm();
  const [ingredients, setIngredients] = useState([]);
  const [imagePreview, setImagePreview] = useState(null);
  const [descriptionLength, setDescriptionLength] = useState(0);
  const [preparationLength, setPreparationLength] = useState(0);
  const fileInputRef = useRef(null);
  const [file, setFile] = useState(null);

  const maxInputLength = 2000;

  useEffect(() => {
    if (categories.result.length === 0) {
      dispatch(fetchCategories());
    }
  }, [dispatch, categories.result.length]);

  useEffect(() => {
    if (areas.length === 0) {
      dispatch(fetchAreas());
    }
  }, [dispatch, areas.length]);

  useEffect(() => {
    if (ingredientsAll.length === 0) {
      dispatch(fetchIngredients());
    }
  }, [dispatch, ingredientsAll.length]);

  const handleInputChange = event => {
    const { name, value } = event.target;

    if (name === 'description') {
      setDescriptionLength(value.length);
    } else if (name === 'preparation') {
      setPreparationLength(value.length);
    }
  };

  const handleImageChange = event => {
    const file = event.target.files[0];
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setImagePreview(previewUrl);
      setFile(file);
    }
  };

  const handleRemoveImage = () => {
    setImagePreview(null);
    setFile(null);
    setValue('file', null);
    fileInputRef.current.value = null;
    openFileDialog();
  };

  const openFileDialog = () => {
    fileInputRef.current.click();
  };

  const handleBtnIngredientClick = () => {
    const ingredientValue = watch('ingredient');
    const quantity = watch('quantity');

    if (ingredientValue && quantity) {
      const selectedIngredient = JSON.parse(watch('ingredient'));
      const newIngredients = [
        ...ingredients,
        {
          ...selectedIngredient,
          quantity,
        },
      ];
      setIngredients(newIngredients);
      setValue('ingredient', '');
      setValue('quantity', '');
    }
  };

  const handleIngredientDelete = id => {
    setIngredients(ingredients.filter(ingredient => ingredient._id !== id));
  };

  console.log('ingredients', ingredients);

  const onSubmit = async data => {
    const formData = new FormData();
    formData.append('title', data.name);
    formData.append('category', data.category);
    formData.append('area', data.area);
    formData.append('instructions', data.preparation);
    formData.append('description', data.description);
    formData.append('time', data.time);
    formData.append('thumbRecipeImages', file);

    const ingredientsArray = ingredients.map(ingredient => ({
      id: ingredient._id,
      measure: ingredient.quantity,
    }));

    formData.append('ingredients', JSON.stringify(ingredientsArray));

    try {
      const response = await recipeApi.createRecipe(formData);
      console.log('Recipe created successfully', response.data);
    } catch (error) {
      console.error('Error creating recipe', error.response || error.message);
    }
  };

  return (
    <div className={styles['add-recipe-form-container']}>
      <h1 className={styles.title}>Add recipe</h1>
      <p className={styles.text}>
        Reveal your culinary art, share your favorite recipe and create
        gastronomic masterpieces with us.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div className={styles['img-other-wrapper']}>
          <div>
            {!imagePreview && (
              <div className={styles['container-form']}>
                <label htmlFor="file" className={styles.label}></label>
                <input
                  type="file"
                  id="file"
                  accept="image/*"
                  {...register('file')}
                  onChange={handleImageChange}
                  ref={fileInputRef}
                  className={`${styles.input} ${styles['input-file']}`}
                />
              </div>
            )}
            {imagePreview && (
              <div className={styles['image-preview-container']}>
                <img
                  src={imagePreview}
                  alt="Recipe Preview"
                  className={styles['image-preview']}
                />
                <div className={styles['remove-image-container']}>
                  <button
                    type="button"
                    onClick={handleRemoveImage}
                    className={styles['remove-image-button']}
                  >
                    Upload another photo
                  </button>
                </div>
              </div>
            )}
          </div>
          <div>
            <div className={styles['container-form']}>
              <label htmlFor="name" className={styles.label}></label>
              <input
                placeholder="The name of the recipe"
                id="name"
                {...register('name')}
                onChange={handleInputChange}
                className={`${styles.input} ${styles['input-name']}`}
              />
            </div>

            <div className={styles['container-form']}>
              <label htmlFor="description" className={styles.label}></label>
              <div className={styles['input-counter-wrapper']}>
                <TextareaAutosize
                  placeholder="Enter a description of the dish"
                  id="description"
                  {...register('description', {
                    maxLength: maxInputLength,
                  })}
                  onChange={handleInputChange}
                  maxLength={maxInputLength}
                  className={`${styles.input} ${styles['input-description']}`}
                />
                <div className={styles['character-count']}>
                  {descriptionLength}/{maxInputLength}
                </div>
              </div>
            </div>
            <div className={styles['category-area-wrapper']}>
              <div className={styles['container-form']}>
                <label htmlFor="category" className={styles.label}>
                  Category
                </label>
                <div className={`${styles['custom-select']}`}>
                  <select
                    id="category"
                    {...register('category')}
                    defaultValue=""
                    className={`${styles.select} ${styles['select-category']}`}
                  >
                    <option value="">Select a category</option>
                    {categories.result
                      .slice()
                      .sort((a, b) => a.name.localeCompare(b.name))
                      .map(category => (
                        <option key={category._id} value={category.name}>
                          {category.name}
                        </option>
                      ))}
                  </select>
                  <svg className={`${styles['icon-select']}`}>
                    <use href={`${icons}#icon-chevron-down`} />
                  </svg>
                </div>
              </div>
              <div className={styles['container-form']}>
                <label htmlFor="area" className={styles.label}>
                  Area
                </label>
                <div className={`${styles['custom-select']}`}>
                  <select id="area" {...register('area')} defaultValue="">
                    <option value="">Select an area</option>
                    {areas
                      .slice()
                      .sort((a, b) => a.name.localeCompare(b.name))
                      .map(area => (
                        <option key={area._id} value={area.name}>
                          {area.name}
                        </option>
                      ))}
                  </select>
                  <svg className={`${styles['icon-select']}`}>
                    <use href={`${icons}#icon-chevron-down`} />
                  </svg>
                </div>
              </div>
            </div>

            <div className={styles['container-form']}>
              <label className={styles.label}>Cooking Time</label>
              <div className={styles['time-container']}>
                <button
                  type="button"
                  onClick={() => {
                    const newValue = Math.max(0, watch('time') - 10);
                    setValue('time', newValue);
                  }}
                  className={styles['time-button']}
                >
                  <svg className={`${styles['icons-time']}`}>
                    <use href={`${icons}#icon-minus`} />
                  </svg>
                </button>
                <input
                  type="number"
                  {...register('time', { valueAsNumber: true })}
                  min="0"
                  defaultValue="0"
                  className={`${styles.input} ${styles['input-time']}`}
                />
                <button
                  type="button"
                  onClick={() => {
                    const newValue = (watch('time') || 0) + 10;
                    setValue('time', newValue);
                  }}
                  className={styles['time-button']}
                >
                  <svg className={`${styles['icons-time']}`}>
                    <use href={`${icons}#icon-plus`} />
                  </svg>
                </button>
              </div>
            </div>
            <h3 className={styles['ingredient-title']}>Ingredients</h3>
            <div className={styles['ingredient-quantity-wrapper']}>
              <div className={`${styles['custom-select']}`}>
                <label htmlFor="ingredient" className={styles.label}></label>
                <select
                  id="ingredient"
                  {...register('ingredient')}
                  defaultValue=""
                  className={`${styles.select} ${styles['select-ingredient']}`}
                >
                  <option value="" disabled>
                    Add the ingredient
                  </option>
                  {ingredientsAll
                    .slice()
                    .sort((a, b) => a.name.localeCompare(b.name))
                    .map(ingredient => (
                      <option
                        key={ingredient._id}
                        value={JSON.stringify(ingredient)}
                      >
                        {ingredient.name}
                      </option>
                    ))}
                </select>
                <svg className={`${styles['icon-select']}`}>
                  <use href={`${icons}#icon-chevron-down`} />
                </svg>
              </div>
              <div>
                <label htmlFor="quantity" className={styles.label}></label>
                <div className={styles['input-quantity-wrapper']}>
                  <input
                    type="text"
                    id="quantity"
                    placeholder="Enter quantity"
                    {...register('quantity')}
                    className={`${styles.input} ${styles['input-quantity']}`}
                  />
                </div>
              </div>
            </div>
            <button
              type="button"
              onClick={handleBtnIngredientClick}
              className={styles['add-button']}
            >
              Add ingredient
              <svg className={`${styles['icon-ingredient-plus']}`}>
                <use href={`${icons}#icon-plus`} />
              </svg>
            </button>

            <div className={styles.ingredients_list_wrap}>
              <ul className={styles.ingredients_list}>
                {ingredients.length > 0 &&
                  ingredients.map((ingredient, index) => (
                    <li key={index} className={styles.ingredient_item}>
                      <div className={styles.ingredient_image}>
                        <img src={ingredient.img} alt={ingredient.name} />
                      </div>
                      <div className={styles.ingredient_info}>
                        <span className={styles.ingredient_name}>
                          {ingredient.name}
                        </span>
                        <span className={styles.ingredient_measure}>
                          {ingredient.quantity}
                        </span>
                      </div>
                      <button
                        type="button"
                        className={`${styles['ingredient-delete-btn']}`}
                        onClick={() => handleIngredientDelete(ingredient._id)}
                      >
                        <svg
                          className={`${styles['ingredient-delete-btn-icon']}`}
                        >
                          <use href={`${icons}#icon-cross`} />
                        </svg>
                      </button>
                    </li>
                  ))}
              </ul>
            </div>

            <div className={styles['container-form']}>
              <label
                htmlFor="preparation"
                className={`${styles.label} ${styles['label-preparation']}`}
              >
                Recipe Preparation
              </label>
              <div className={styles['input-counter-wrapper']}>
                <TextareaAutosize
                  rows={1}
                  id="preparation"
                  placeholder="Enter recipe"
                  {...register('preparation', {
                    maxLength: maxInputLength,
                  })}
                  onChange={handleInputChange}
                  maxLength={maxInputLength}
                  className={`${styles.textarea} ${styles['textarea-preparation']}`}
                />
                <div className={styles['character-count']}>
                  {preparationLength}/{maxInputLength}
                </div>
              </div>
            </div>
            <div className={`${styles['clear-submit-wrapper']}`}>
              <button
                type="button"
                onClick={() => {
                  reset();
                  setIngredients([]);
                  setDescriptionLength(0);
                  setPreparationLength(0);
                }}
                className={styles['clear-button']}
              >
                <svg className={styles['icon-trash']}>
                  <use href={`${icons}#icon-trash`} />
                </svg>
              </button>
              <button type="submit" className={styles['submit-button']}>
                Publish
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddRecipeForm;
