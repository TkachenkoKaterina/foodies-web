import styles from './Button.module.scss';

const Button = ({ children, onClick, variant, disabled, type = 'button' }) => {
  return (
    <button
      className={`${styles.button} ${variant ? styles[variant] : ''} `}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
