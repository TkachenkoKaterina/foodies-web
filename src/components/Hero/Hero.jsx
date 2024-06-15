import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { MODAL_TYPES } from '../../constants/common';

import Container from '../../ui-kit/Container';

import { getIsLoggedIn } from '../../redux/auth/authSelectors.js';

import images from '../../assets/images/hero';

import css from './Hero.module.scss';

const Hero = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isLogin = useSelector(getIsLoggedIn);

  const handleClick = () => {
    isLogin
      ? navigate('/recipe/add')
      : dispatch({ type: MODAL_TYPES.LOGIN, modalProps: { open: true } });
  };

  return (
    <section className={css['hero-section']}>
      <Container>
        <div className={css['hero-wrapper']}>
          <h1 className={css['hero-title']}>Improve Your Culinary Talents</h1>
          <h3 className={css['hero-description']}>
            Amazing recipes for beginners in the world of cooking, enveloping
            you in the aromas and tastes of various cuisines.
          </h3>
          <button
            type="button"
            onClick={handleClick}
            className={css['hero-btn']}
          >
            Add recipe
          </button>
          <div className={css['hero-wrapper-img']}>
            <div className={css['hero-img-small']}>
              <img
                width="128"
                src={images.imageSmall1x}
                srcSet={`${images.imageSmall1x} 1x,
                                    ${images.imageSmall2x} 2x,
                                    ${images.imageSmall2x} 3x`}
                alt="food"
              />
            </div>
            <div className={css['hero-img-big']}>
              <img
                width="302"
                src={images.imageBig1x}
                srcSet={`${images.imageBig1x} 1x,
                                    ${images.imageBig2x} 2x,
                                    ${images.imageBig2x} 3x`}
                alt="food"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
