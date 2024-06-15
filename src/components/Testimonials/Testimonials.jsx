import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import css from './Testimonials.module.scss';
import Container from '../../ui-kit/Container';
import quote from '../../assets/icons/quote.svg';

import { selectTestimonials } from '../../redux/testimonials/testimonialsSelectors';
import { fetchTestimonials } from '../../redux/testimonials/testimonialsOperations';
import { useDispatch, useSelector } from 'react-redux';

const Testimonials = () => {
  const dispatch = useDispatch();
  // const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    dispatch(fetchTestimonials());
    // .then(() => setIsLoading(false))
    // .catch(error => console.error(error));
  }, [dispatch]);

  const testimonialsInfo = useSelector(selectTestimonials);
  const testimonials = testimonialsInfo.result;

  // console.log(testimonials);

  return (
    <Container>
      <div className={css['testimonials-container']}>
        <p className={css['testimonials-description']}>What our customer say</p>
        <h2 className={css['testimonials-title']}>TESTIMONIALS</h2>

        <Swiper
          autoplay={{
            delay: 3000,
            disableOnInteraction: true,
          }}
          pagination={{ clickable: true }}
          modules={[Pagination, Autoplay]}
          className={css['swiper']}
        >
          {testimonials.map(({ _id, testimonial, owner }, index) => (
            <SwiperSlide key={`${_id}-${index}`} className={css['swiperSlide']}>
              <svg className={css['svg']}>
                <use xlinkHref={`${quote}#icon-quote`} />
              </svg>
              <span className={css['text']}>{testimonial}</span>
              <span className={css['owner']}>{owner}</span>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Container>
  );
};

export default Testimonials;
