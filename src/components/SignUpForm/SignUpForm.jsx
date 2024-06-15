import styles from './SignUpForm.module.scss';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useState } from 'react';
import icons from '../../assets/icons/icons.svg';
import { Button } from '../../ui-kit';
import { useDispatch } from 'react-redux';
import { useStore } from 'react-redux';
import { register as signUP } from '../../redux/auth/authOperations';
import {
  getError,
  getIsLoggedIn,
  getLoading,
} from '../../redux/auth/authSelectors';
import { Notify } from 'notiflix';

const SignUpForm = ({ onRequestClose }) => {
  const dispatch = useDispatch();
  const store = useStore();

  const [passHiddenState, setpassHiddenState] = useState(true);

  const schema = yup.object().shape({
    name: yup
      .string()
      .min(3, '*  Name - must be at least 3 characters')
      .required('*  Name is required'),
    email: yup
      .string()
      .email('*  Invalid email')
      .required('*  Email is required'),
    password: yup
      .string()
      .min(8, '*  Password must be at least 8 characters')
      .required('*  Password is required'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async data => {
    dispatch(signUP(data)).then(() => {
      const state = store.getState();
      const isLoading = getLoading(state);
      const isLoggedIn = getIsLoggedIn(state);
      const errormMsg = getError(state);

      if (isLoggedIn) {
        onRequestClose(() => false);
        Notify.success('You have successfully registered!');
      }

      if (errormMsg) {
        Notify.failure(errormMsg);
      }
    });
  };

  return (
    <div className={styles.formWrapper}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.inputContainer}>
          <input
            className={`${styles.input} ${
              errors.name ? styles.inputError : ''
            }`}
            name="name"
            type="text"
            placeholder="Name*"
            {...register('name', {
              required: 'Name is required.',
              minLength: {
                value: 2,
                message: 'Min length of Name is 2 characters',
              },
            })}
          />
          <p className={styles.error}>{errors.name?.message}</p>
        </div>
        <div className={styles.inputContainer}>
          <input
            className={`${styles.input} ${
              errors.email ? styles.inputError : ''
            }`}
            name="email"
            type="text"
            placeholder="Email*"
            {...register('email', { required: 'Email is required' })}
          />
          <p className={styles.error}>{errors.email?.message}</p>
        </div>
        <div className={styles.inputContainer}>
          <input
            className={`${styles.input} ${
              errors.password ? styles.inputError : ''
            }`}
            name="password"
            type={passHiddenState ? 'password' : 'text'}
            autoComplete="on"
            placeholder="Password"
            {...register('password', { required: 'Password is required' })}
          />

          <svg
            className={styles.icon}
            onClick={() => setpassHiddenState(!passHiddenState)}
          >
            <use
              href={
                `${icons}#` + `${passHiddenState ? 'icon-eye-off' : 'icon-eye'}`
              }
            ></use>
            o
          </svg>
          <p className={styles.error}>{errors.password?.message}</p>
        </div>
        <div className={styles.btnWraper}>
          <Button type={'submit'} variant={'auth'}>
            Create
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
