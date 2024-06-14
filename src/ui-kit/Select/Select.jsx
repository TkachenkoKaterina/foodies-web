import { useEffect } from 'react';
import styles from './Select.module.scss';
export const Select = ({
  arrayOfObjects,
  placeholder,
  selectHendler,
  ingredientIdHendler,
  areaHandler,
}) => {
  // useEffect(() => {
  //   console.log(arrayOfObjects);
  // }, [placeholder]);

  const handleChange = event => {
    if (!event.nativeEvent.inputType) {
      event.target.blur();
    }
  };

  // const clear = event => {
  //   console.log(event.currentTarget.value);
  //   event.target.value = '';
  // };
  const textId = placeholder.toString();
  return (
    <div className={styles.selectBox}>
      <input
        className={styles.input}
        type="input"
        list={textId}
        onChange={handleChange}
        onClick={placeholder === 'Area' ? areaHandler : ingredientIdHendler}
        onFocus={placeholder === 'Area' ? areaHandler : ingredientIdHendler}
        placeholder={placeholder}
        id={placeholder}
        defaultValue=""
      />
      <datalist id={textId} className={styles.datalist}>
        {arrayOfObjects.map(({ _id, name }) => (
          <option
            key={_id + name}
            id={_id}
            onClick={placeholder === 'Area' ? areaHandler : ingredientIdHendler}
          >
            {name}
          </option>
        ))}
      </datalist>
    </div>
  );
};
export default Select;
