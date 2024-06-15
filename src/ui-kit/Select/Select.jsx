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
    console.log(event.currentTargerValue);
  };

  // const clear = event => {
  //   console.log(event.currentTarget.value);
  //   event.target.value = '';
  // };

  return (
    <div className={styles.selectBox}>
      <input
        className={styles.input}
        type="input"
        list={placeholder}
        onChange={handleChange}
        onClick={() => console.log(value)}
        onFocus={() => console.log(value)}
        placeholder={placeholder}
        id={placeholder}
        defaultValue=""
      />
      <datalist id={placeholder} className={styles.datalist}>
        {arrayOfObjects.map(({ _id, name }) => (
          <option
            key={_id + name}
            id={_id}
            onClick={
              placeholder === 'Area'
                ? areaHandler(name)
                : ingredientIdHendler(name)
            }
          >
            {name}
          </option>
        ))}
      </datalist>
    </div>
  );
};
export default Select;
