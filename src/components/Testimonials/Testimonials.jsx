import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import css from './Testimonials.module.scss';
import Container from '../../ui-kit/Container';
// import ListPagination from '../../ui-kit/ListPagination';
import quote from '../../assets/icons/quote.svg';

const testimonials = [
  {
    _id: '1',
    testimonial: `Thank you for the wonderful recipe for feta pasta with tomatoes and basil. It turned out to be not only tasty, but also incredibly colorful. This has become a favorite family meal!`,
    username: 'Larry Pageim',
  },
  {
    _id: '2',
    testimonial: `Very pleased with how easy this dinner was to make. The instructions are clear and the step-by-step process makes it accessible even for beginners. I recommend experimenting and bringing a personal touch!`,
    username: 'Larry Pageim',
  },
  {
    _id: '3',
    testimonial: `Thank you so much for this great recipe! It has become a real savior for me for dinner when I want something tasty and quick.`,
    username: 'Larry Pageim',
  },
];

const Testimonials = () => {
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
          {testimonials.map(testimonial => (
            <SwiperSlide key={testimonial.id} className={css['swiperSlide']}>
              <svg className={css['svg']}>
                <use xlinkHref={`${quote}#icon-quote`} />
              </svg>
              <span className={css['text']}>{testimonial.testimonial}</span>
              <span className={css['owner']}>{testimonial.username}</span>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* <ListPagination /> */}
      </div>
    </Container>
  );
};

export default Testimonials;
