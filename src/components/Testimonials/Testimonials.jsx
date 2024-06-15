import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import css from './Testimonials.module.scss';
import Container from '../../ui-kit/Container';
import quote from '../../assets/icons/quote.svg';
// import ListPagination from '../../ui-kit/ListPagination';

import { selectTestimonials } from '../../redux/testimonials/testimonialsSelectors';
import { fetchTestimonials } from '../../redux/testimonials/testimonialsOperations';
import { useDispatch, useSelector } from 'react-redux';

const Testimonials = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    dispatch(fetchTestimonials())
      .then(() => setIsLoading(false))
      .catch(error => console.error(error));
  }, [dispatch]);

  const testimonials = useSelector(selectTestimonials);

  return (
    <Container>
      <div className={css['testimonials-container']}>
        <p className={css['testimonials-description']}>
          What our customers say
        </p>
        <h2 className={css['testimonials-title']}>TESTIMONIALS</h2>
        {/* <ListPagination />  */}
        {isLoading ? (
          <p>Loading testimonials...</p>
        ) : (
          testimonials.length > 0 && (
            <Swiper
              autoplay={{ delay: 3000, disableOnInteraction: true }}
              pagination={{ clickable: true }}
              modules={[Pagination, Autoplay]}
              className={css['swiper']}
            >
              {testimonials.map(({ _id, testimonial, owner }) => (
                <SwiperSlide key={_id} className={css['swiperSlide']}>
                  <svg className={css['svg']}>
                    <use xlinkHref={`${quote}#icon-quote`} />
                  </svg>
                  <span className={css['text']}>{testimonial}</span>
                  <span className={css['owner']}>{owner}</span>
                </SwiperSlide>
              ))}
            </Swiper>
          )
        )}
      </div>
    </Container>
  );
};

export default Testimonials;

// import React, { useEffect } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay, Pagination } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import css from './Testimonials.module.scss';
// import Container from '../../ui-kit/Container';
// import quote from '../../assets/icons/quote.svg';

// const testimonials = [
//   {
//     _id: '1',
//     testimonial: `Thank you for the wonderful recipe for feta pasta with tomatoes and basil. It turned out to be not only tasty, but also incredibly colorful. This has become a favorite family meal!`,
//     username: 'Larry Pageim',
//   },
//   {
//     _id: '2',
//     testimonial: `Very pleased with how easy this dinner was to make. The instructions are clear and the step-by-step process makes it accessible even for beginners. I recommend experimenting and bringing a personal touch!`,
//     username: 'Larry Pageim',
//   },
//   {
//     _id: '3',
//     testimonial: `Thank you so much for this great recipe! It has become a real savior for me for dinner when I want something tasty and quick.`,
//     username: 'Larry Pageim',
//   },
// ];

// const Testimonials = () => {
//   return (
//     <Container>
//       <div className={css['testimonials-container']}>
//         <p className={css['testimonials-description']}>What our customer say</p>
//         <h2 className={css['testimonials-title']}>TESTIMONIALS</h2>

//         <Swiper
//           autoplay={{
//             delay: 3000,
//             disableOnInteraction: true,
//           }}
//           pagination={{ clickable: true }}
//           modules={[Pagination, Autoplay]}
//           className={css['swiper']}
//         >
//           {testimonials.map(({ _id, testimonial, owner }) => (
//             <SwiperSlide key={_id} className={css['swiperSlide']}>
//               <svg className={css['svg']}>
//                 <use xlinkHref={`${quote}#icon-quote`} />
//               </svg>
//               <span className={css['text']}>{testimonial}</span>
//               <span className={css['owner']}>{owner}</span>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </Container>
//   );
// };

// export default Testimonials;
