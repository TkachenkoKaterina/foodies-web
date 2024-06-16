import styles from './SignInForm.module.scss';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useState } from 'react';
import icons from '../../assets/icons/icons.svg';
import { Button } from '../../ui-kit';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/authOperations';
import {
  getError,
  getIsLoggedIn,
  getLoading,
} from '../../redux/auth/authSelectors';
import Notiflix from 'notiflix';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { closeModal } from '../../redux/modal/modalSlice';

const SignInForm = () => {
  const dispatch = useDispatch();
  const [passHiddenState, setpassHiddenState] = useState(true);

  const loading = useSelector(getLoading);
  const isLoggedIn = useSelector(getIsLoggedIn);
  const errorMsg = useSelector(getError);

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(closeModal());
      Notiflix.Notify.success('You have successfully logged in!');
    }

    if (errorMsg) {
      Notiflix.Notify.failure(errorMsg);
    }
  }, [isLoggedIn, errorMsg, dispatch]);

  useEffect(() => {
    if (loading) {
      Notiflix.Loading.dots();
    } else {
      Notiflix.Loading.remove();
    }
  }, [loading]);

  const schema = yup.object().shape({
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
    mode: 'submit',
  });

  const onSubmit = async data => {
    dispatch(login(data));
  };

  return (
    <div className={styles.formWrapper}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.inputContainer}>
          <input
            className={`${styles.input} ${
              errors.email ? styles.inputError : ''
            }`}
            name="email"
            type="text"
            placeholder="Email*"
            autoComplete="on"
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
            placeholder="Password"
            {...register('password', { required: 'Password is required' })}
          />

          <button
            type={'button'}
            onClick={() => setpassHiddenState(!passHiddenState)}
          >
            <svg className={styles.icon}>
              <use
                href={
                  `${icons}#` +
                  `${passHiddenState ? 'icon-eye-off' : 'icon-eye'}`
                }
              ></use>
            </svg>
          </button>
          <p className={styles.error}>{errors.password?.message}</p>
        </div>
        <div className={styles.btnWraper}>
          <Button type={'submit'} disabled={errors.email || errors.password}>
            SignIn
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
