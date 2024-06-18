import React, { useState, useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
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
import Notiflix from 'notiflix';
import { getUser } from '../../redux/auth/authSelectors';

const AddRecipeForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const categories = useSelector(selectCategories);
  const areas = useSelector(selectAreas);
  const ingredientsAll = useSelector(selectIngredients);
  const user = useSelector(getUser);
  const [ingredients, setIngredients] = useState([]);
  const [imagePreview, setImagePreview] = useState(null);
  const [descriptionLength, setDescriptionLength] = useState(0);
  const [preparationLength, setPreparationLength] = useState(0);
  const fileInputRef = useRef(null);
  const [file, setFile] = useState(null);
  const [focusedButton, setFocusedButton] = useState(null);

  const maxInputLength = 2000;

  const handleImageChange = event => {
    const file = event.target.files[0];
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setImagePreview(previewUrl);
      setFile(file);
      setValue('file', file);
    }
  };

  const handleUploadNewImage = () => {
    fileInputRef.current.click();
  };

  const schema = Yup.object().shape({
    name: Yup.string().required('Recipe name is required'),
    description: Yup.string()
      .required('Description is required')
      .max(
        maxInputLength,
        `Description can't be more than ${maxInputLength} characters`
      ),
    preparation: Yup.string()
      .required('Preparation instructions are required')
      .max(
        maxInputLength,
        `Preparation instructions can't be more than ${maxInputLength} characters`
      ),
    category: Yup.string().required('Category is required'),
    area: Yup.string().required('Area is required'),
    time: Yup.number()
      .required('Cooking time is required')
      .min(1, 'Cooking time cannot be zero'),
    file: Yup.mixed().required('Image is required'),
    ingredients: Yup.array()
      .min(1, 'At least one ingredient is required')
      .required('Ingredients are required'),
  });

  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

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

  useEffect(() => {
    if (focusedButton) {
      setTimeout(() => {
        focusedButton.blur();
        setFocusedButton(null);
      }, 300);
    }
  }, [focusedButton]);

  const handleInputChange = event => {
    const { name, value } = event.target;
    if (name === 'description') {
      setDescriptionLength(value.length);
    } else if (name === 'preparation') {
      setPreparationLength(value.length);
    }
  };

  const handleSelectMouseDown = event => {
    if (event.currentTarget === document.activeElement) {
      event.preventDefault();
      event.currentTarget.blur();
    }
  };

  const handleBtnIngredientClick = e => {
    setFocusedButton(e.currentTarget);
    const ingredientValue = watch('ingredient');
    const quantity = watch('quantity');
    if (!ingredientValue || !quantity) {
      Notiflix.Notify.failure('Set ingredient and quantity');
      return;
    }
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
      setValue('ingredients', newIngredients);
      setValue('ingredient', '');
      setValue('quantity', '');
    }
  };

  const handleIngredientDelete = (id, e) => {
    setFocusedButton(e.currentTarget);
    const updatedIngredients = ingredients.filter(
      ingredient => ingredient._id !== id
    );
    setIngredients(updatedIngredients);
    setValue('ingredients', updatedIngredients);
  };

  const handleClearForm = () => {
    reset();
    setImagePreview(null);
    setFile(null);
    setIngredients([]);
    setDescriptionLength(0);
    setPreparationLength(0);
    clearErrors();
  };

  const onSubmit = async data => {
    const formData = new FormData();
    formData.append('title', data.name);
    formData.append('category', data.category);
    formData.append('area', data.area);
    formData.append('instructions', data.preparation);
    formData.append('description', data.description);
    formData.append('time', data.time);
    formData.append('thumbRecipeImages', data.file);

    const ingredientsArray = data.ingredients.map(ingredient => ({
      id: ingredient._id,
      measure: ingredient.quantity,
    }));

    formData.append('ingredients', JSON.stringify(ingredientsArray));

    try {
      const response = await recipeApi.createRecipe(formData);
      Notiflix.Notify.success('Recipe created successfully', response.data);
      handleClearForm();
      navigate(`/user/${user._id}`);
    } catch (error) {
      Notiflix.Notify.failure(
        `${error.message} ${error.response.data.message}`
      );
    }
  };

  const onError = () => {
    setTimeout(() => {
      clearErrors();
    }, 3000);
  };

  return (
    <div className={styles['add-recipe-form-container']}>
      <h1 className={styles.title}>Add recipe</h1>
      <p className={styles.text}>
        Reveal your culinary art, share your favorite recipe and create
        gastronomic masterpieces with us.
      </p>

      <form onSubmit={handleSubmit(onSubmit, onError)} className={styles.form}>
        <div className={styles['img-other-wrapper']}>
          <div className={styles['image-preview-container']}>
            <div
              className={styles['custom-input-container']}
              style={{ display: imagePreview ? 'none' : 'block' }}
            >
              <input
                type="file"
                id="file"
                accept="image/*"
                {...register('file')}
                onChange={handleImageChange}
                ref={fileInputRef}
                className={`${styles.input} ${styles['input-file']} ${
                  errors.file ? styles.error2 : ''
                }`}
              />
              <label
                htmlFor="file"
                className={`${errors.file ? styles.error : ''}`}
              >
                <svg className={styles['icon-upload']}>
                  <use href={`${icons}#icon-upload`} />
                </svg>
                Upload a photo
              </label>
              {errors.file && Notiflix.Notify.failure(errors.file.message)}
            </div>
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
                    onClick={e => {
                      setFocusedButton(e.currentTarget);
                      handleUploadNewImage();
                    }}
                    className={styles['remove-image-button']}
                  >
                    Upload another photo
                  </button>
                </div>
              </div>
            )}
          </div>
          <div className={styles['other-wrapper']}>
            <div className={styles['container-form']}>
              <label htmlFor="name"></label>
              <input
                placeholder="The name of the recipe"
                id="name"
                {...register('name')}
                onChange={handleInputChange}
                className={`${styles.input} ${styles['input-name']} ${
                  errors.name ? styles.error : ''
                }`}
              />
              {errors.name && Notiflix.Notify.failure(errors.name.message)}
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
                  className={`${styles.input} ${styles['input-description']} ${
                    errors.description ? styles.error : ''
                  }`}
                />
                <div className={`${styles['character-count']}`}>
                  <span
                    className={`${styles['character-length']} ${
                      descriptionLength > 0 ? styles.active : ''
                    }`}
                  >
                    {descriptionLength}
                  </span>
                  /{maxInputLength}
                </div>
                {errors.description &&
                  Notiflix.Notify.failure(errors.description.message)}
              </div>
            </div>
            <div className={styles['category-area-wrapper']}>
              <div className={styles['container-form']}>
                <label htmlFor="category" className={styles.label}>
                  Category
                </label>
                <div
                  className={`${styles['custom-select']} ${
                    errors.category ? styles.error : ''
                  }`}
                >
                  <select
                    id="category"
                    {...register('category')}
                    defaultValue=""
                    className={`${styles.select} ${styles['select-category']}`}
                    onMouseDown={handleSelectMouseDown}
                  >
                    {errors.category &&
                      Notiflix.Notify.failure(errors.category.message)}
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

                  <svg className={styles['icon-select']}>
                    <use href={`${icons}#icon-chevron-down`} />
                  </svg>
                </div>
              </div>
              <div className={styles['container-form']}>
                <label htmlFor="area" className={styles.label}>
                  Area
                </label>
                <div
                  className={`${styles['custom-select']} ${
                    errors.area ? styles.error : ''
                  }`}
                >
                  <select
                    id="area"
                    {...register('area')}
                    defaultValue=""
                    className={styles.select}
                    onMouseDown={handleSelectMouseDown}
                  >
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
                  <svg className={styles['icon-select']}>
                    <use href={`${icons}#icon-chevron-down`} />
                  </svg>
                </div>
                {errors.area && Notiflix.Notify.failure(errors.area.message)}
              </div>
            </div>

            <div className={styles['container-form']}>
              <label className={styles.label}>Cooking Time</label>
              <div
                className={`${styles['time-container']} ${
                  errors.time ? styles.error : ''
                }`}
              >
                <button
                  type="button"
                  onClick={e => {
                    const newValue = Math.max(0, watch('time') - 10);
                    setValue('time', newValue);
                    setFocusedButton(e.currentTarget);
                  }}
                  className={styles['time-button']}
                >
                  <svg className={styles['icons-time']}>
                    <use href={`${icons}#icon-minus`} />
                  </svg>
                </button>
                <div className={`${styles['time-input-span-wrapper']} `}>
                  <input
                    type="text"
                    {...register('time', { valueAsNumber: true })}
                    min="0"
                    defaultValue="0"
                    className={`${styles.input} ${styles['input-time']}`}
                    readOnly
                  />
                  <span className={styles['time-span-min']}>min </span>
                </div>

                <button
                  type="button"
                  onClick={e => {
                    const newValue = (watch('time') || 0) + 10;
                    setValue('time', newValue);
                    setFocusedButton(e.currentTarget);
                  }}
                  className={styles['time-button']}
                >
                  <svg className={styles['icons-time']}>
                    <use href={`${icons}#icon-plus`} />
                  </svg>
                </button>
                {errors.time && Notiflix.Notify.failure(errors.time.message)}
              </div>
            </div>
            <h3 className={styles['ingredient-title']}>Ingredients</h3>
            <div className={styles['ingredient-quantity-wrapper']}>
              <div
                className={`${styles['custom-select']} ${
                  errors.ingredients ? styles.error : ''
                }`}
              >
                <label htmlFor="ingredient"></label>
                <select
                  id="ingredient"
                  {...register('ingredient')}
                  defaultValue=""
                  className={`${styles.select} ${styles['select-ingredient']} ${
                    errors.ingredients ? styles.error : ''
                  }`}
                  onMouseDown={handleSelectMouseDown}
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
                {errors.ingredients &&
                  Notiflix.Notify.failure(errors.ingredients.message)}
                <svg className={styles['icon-select']}>
                  <use href={`${icons}#icon-chevron-down`} />
                </svg>
              </div>
              <div>
                <div className={styles['input-quantity-ingredients']}>
                  <label htmlFor="quantity" className={styles.label}></label>
                  <input
                    type="text"
                    id="quantity"
                    placeholder="Enter quantity"
                    {...register('quantity')}
                    className={`${styles.input} ${styles['input-quantity']} ${
                      errors.ingredients ? styles.error : ''
                    }`}
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
              <svg className={styles['icon-ingredient-plus']}>
                <use href={`${icons}#icon-plus`} />
              </svg>
            </button>

            {ingredients.length > 0 && (
              <div className={styles.ingredients_list_wrap}>
                <ul className={styles.ingredients_list}>
                  {ingredients.map((ingredient, index) => (
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
                        onClick={e => handleIngredientDelete(ingredient._id, e)}
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
            )}

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
                  className={`${styles.textarea} ${
                    styles['textarea-preparation']
                  } ${errors.preparation ? styles.error : ''}`}
                />
                <div className={`${styles['character-count']}`}>
                  <span
                    className={`${styles['character-length']} ${
                      preparationLength > 0 ? styles.active : ''
                    }`}
                  >
                    {preparationLength}
                  </span>
                  /{maxInputLength}
                </div>
                {errors.preparation &&
                  Notiflix.Notify.failure(errors.preparation.message)}
              </div>
            </div>
            <div className={`${styles['clear-submit-wrapper']}`}>
              <button
                type="button"
                onClick={e => {
                  setFocusedButton(e.currentTarget);
                  handleClearForm();
                }}
                className={styles['clear-button']}
              >
                <svg className={styles['icon-trash']}>
                  <use href={`${icons}#icon-trash`} />
                </svg>
              </button>
              <button
                type="submit"
                className={styles['submit-button']}
                onClick={e => setFocusedButton(e.currentTarget)}
              >
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
