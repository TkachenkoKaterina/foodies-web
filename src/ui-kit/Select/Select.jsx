import { useEffect } from 'react';
import styles from './Select.module.scss';
export const Select = ({ arrayOfObjects, placeholder }) => {
  const handleChange = event => {
    if (!event.nativeEvent.inputType) {
      event.target.blur();
    }
  };

  const clear = event => {
    event.target.value = '';
  };
  return (
    <div className={styles.selectBox}>
      <input
        className={styles.input}
        type="input"
        list="optionsList"
        onChange={handleChange}
        onClick={clear}
        onFocus={clear}
        placeholder={placeholder}
        id={placeholder}
      />
      <datalist id="optionsList" className={styles.datalist}>
        {arrayOfObjects.map(({ name, _id }) => (
          <option key={_id} id={_id}>
            {name}
          </option>
        ))}
      </datalist>
    </div>
  );
};
export default Select;
