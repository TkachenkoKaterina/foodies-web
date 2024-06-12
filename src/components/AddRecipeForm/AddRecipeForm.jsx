import { useState, useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import styles from './AddRecipeForm.module.scss';
import Container from '../../ui-kit/Container/index';
import { Button } from '../../ui-kit';

const AddRecipeForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
    setValue,
  } = useForm();
  const [ingredients, setIngredients] = useState([{ id: 1 }]);
  const [imagePreview, setImagePreview] = useState(null);
  const [descriptionLength, setDescriptionLength] = useState(0);
  const [preparationLength, setPreparationLength] = useState(0);
  const fileInputRef = useRef(null);

  const maxInputLength = 200;

  useEffect(() => {
    const storedValues = JSON.parse(localStorage.getItem('formData'));
    if (storedValues) {
      Object.keys(storedValues).forEach(key => {
        setValue(key, storedValues[key]);
      });
      setDescriptionLength(storedValues.description?.length || 0);
      setPreparationLength(storedValues.preparation?.length || 0);
      setImagePreview(storedValues.imagePreview || null);
    }
  }, [setValue]);

  const handleInputChange = event => {
    const { name, value } = event.target;
    storeFormData(name, value);

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
      storeFormData('imagePreview', previewUrl);
      storeFormData('file', file);
    }
  };

  const handleRemoveImage = () => {
    setImagePreview(null);
    setValue('file', null);
    fileInputRef.current.value = null;
    localStorage.removeItem('imagePreview');
    localStorage.removeItem('file');
    openFileDialog();
  };

  const openFileDialog = () => {
    fileInputRef.current.click();
  };

  const handleBtnIngredientClick = () => {
    setIngredients([...ingredients, { id: ingredients.length + 1 }]);
  };

  const storeFormData = (name, value) => {
    const formData = JSON.parse(localStorage.getItem('formData')) || {};
    formData[name] = value;
    localStorage.setItem('formData', JSON.stringify(formData));
  };

  const onSubmit = data => {
    const formData = new FormData();
    Object.keys(data).forEach(key => {
      formData.append(key, data[key]);
    });

    const storedFile = JSON.parse(localStorage.getItem('formData')).file;
    if (storedFile) {
      formData.append('file', storedFile);
    }

    console.log('Submitted Data:', Object.fromEntries(formData));
    localStorage.removeItem('formData');
  };

  return (
    <Container>
      <div className={styles['add-recipe-form-container']}>
        <h1 className={styles.title}>Add recipe</h1>
        <p className={styles.text}>
          Reveal your culinary art, share your favorite recipe and create
          gastronomic masterpieces with us.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <div className={styles['img-other-wrapper']}>
            {' '}
            <div>
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
                  {...register('name', { required: true })}
                  onChange={handleInputChange}
                  className={`${styles.input} ${styles['input-name']}`}
                />
                {errors.name && (
                  <span className={styles.error}>This field is required</span>
                )}
              </div>

              <div className={styles['container-form']}>
                <label htmlFor="description" className={styles.label}></label>
                <div className={styles['input-counter-wrapper']}>
                  <input
                    placeholder="Enter a description of the dish"
                    id="description"
                    {...register('description', {
                      required: true,
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

                {errors.description && (
                  <span className={styles.error}>This field is required</span>
                )}
              </div>
              <div className={styles['category-area-wrapper']}>
                {' '}
                <div className={styles['container-form']}>
                  <label htmlFor="category" className={styles.label}>
                    Category
                  </label>
                  <select
                    id="category"
                    {...register('category', { required: true })}
                    onChange={e => storeFormData(e.target.name, e.target.value)}
                    className={`${styles.select} ${styles['select-category']}`}
                  >
                    <option value="">Select a category</option>
                    <option value="appetizer">Appetizer</option>
                    <option value="main">Main Course</option>
                    <option value="dessert">Dessert</option>
                  </select>
                  {errors.category && (
                    <span className={styles.error}>This field is required</span>
                  )}
                </div>
                <div className={styles['container-form']}>
                  <label htmlFor="area" className={styles.label}>
                    Area
                  </label>
                  <select
                    id="area"
                    {...register('area', { required: true })}
                    onChange={e => storeFormData(e.target.name, e.target.value)}
                    className={`${styles.select} ${styles['select-area']}`}
                  >
                    <option value="">Select an area</option>
                    <option value="Ukraine">Ukraine</option>
                    <option value="USA">USA</option>
                    <option value="Italy">Italy</option>
                  </select>
                  {errors.area && (
                    <span className={styles.error}>This field is required</span>
                  )}
                </div>
              </div>

              <div className={styles['container-form']}>
                <label className={styles.label}>Cooking Time</label>
                <div className={styles['time-container']}>
                  <button
                    type="button"
                    onClick={() => {
                      const newValue = Math.max(0, watch('time') - 1);
                      setValue('time', newValue);
                      storeFormData('time', newValue);
                    }}
                    className={styles['time-button']}
                  >
                    -
                  </button>
                  <input
                    type="number"
                    {...register('time', { valueAsNumber: true })}
                    min="0"
                    defaultValue="0"
                    onChange={e => storeFormData(e.target.name, e.target.value)}
                    className={`${styles.input} ${styles['input-time']}`}
                  />
                  <button
                    type="button"
                    onClick={() => {
                      const newValue = (watch('time') || 0) + 1;
                      setValue('time', newValue);
                      storeFormData('time', newValue);
                    }}
                    className={styles['time-button']}
                  >
                    +
                  </button>
                </div>
                {errors.time && (
                  <span className={styles.error}>This field is required</span>
                )}
              </div>
              <h3 className={styles['ingredient-title']}>Ingredients</h3>
              {ingredients.map((ingredient, index) => (
                <div
                  className={styles['ingredient-quantity-wrapper']}
                  key={ingredient.id}
                >
                  <div>
                    <label
                      htmlFor="ingredients"
                      className={styles.label}
                    ></label>
                    <select
                      id={`ingredients-${index}`}
                      {...register(`ingredients[${index}]`, { required: true })}
                      onChange={e =>
                        storeFormData(`ingredients[${index}]`, e.target.value)
                      }
                      className={`${styles.select} ${styles['select-ingredient']}`}
                    >
                      <option value="">Add the ingredient</option>
                      <option value="tomato">Tomato</option>
                      <option value="cheese">Cheese</option>
                      <option value="basil">Basil</option>
                    </select>
                    {errors.ingredients && errors.ingredients[index] && (
                      <span className={styles.error}>
                        This field is required
                      </span>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor={`quantity-${index}`}
                      className={styles.label}
                    ></label>
                    <div className={styles['input-counter-wrapper']}>
                      <input
                        type="text"
                        id={`quantity-${index}`}
                        placeholder="Enter quantity"
                        {...register(`quantities[${index}]`, {
                          required: true,
                        })}
                        onChange={e =>
                          storeFormData(`quantities[${index}]`, e.target.value)
                        }
                        className={`${styles.input} ${styles['input-quantity']}`}
                      />
                    </div>

                    {errors.quantities && errors.quantities[index] && (
                      <span className={styles.error}>
                        This field is required
                      </span>
                    )}
                  </div>
                </div>
              ))}

              <div>
                <button
                  type="button"
                  onClick={handleBtnIngredientClick}
                  className={styles['add-button']}
                >
                  Add ingredient+
                </button>
              </div>

              <div className={styles['container-form']}>
                <label
                  htmlFor="preparation"
                  className={`${styles.label} ${styles['label-preparation']}`}
                >
                  Recipe Preparation
                </label>
                <textarea
                  id="preparation"
                  placeholder="Enter recipe"
                  {...register('preparation', {
                    required: true,
                    maxLength: maxInputLength,
                  })}
                  onChange={handleInputChange}
                  maxLength={maxInputLength}
                  className={`${styles.textarea} ${styles['textarea-preparation']}`}
                />
                <div className={styles['character-count']}>
                  {preparationLength}/{maxInputLength}
                </div>
                {errors.preparation && (
                  <span className={styles.error}>This field is required</span>
                )}
              </div>

              <button
                type="button"
                onClick={() => reset()}
                className={styles['clear-button']}
              >
                Clear
              </button>
              <button type="submit" className={styles['submit-button']}>
                Publish
              </button>
            </div>
          </div>
        </form>
      </div>
    </Container>
  );
};

export default AddRecipeForm;
