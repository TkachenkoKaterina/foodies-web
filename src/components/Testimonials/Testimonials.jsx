import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import {
  Author,
  Card,
  Introduction,
  SliderWrapper,
  SwiperPagination,
  Text,
  TitleWrapper,
} from './Testimonials.module.scss';

const testimonials = [
  {
    _id: '1',
    testimonial: `Thank you for the wonderful recipe for feta pasta with tomatoes and basil. It turned
                out to be not only tasty, but also incredibly colorful. This has become a favorite
                family meal!`,
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
    <>
      <Introduction>
        <h3>What our customer say</h3>
      </Introduction>
      <TitleWrapper>
        <h2>Testimonials</h2>
      </TitleWrapper>
      <SliderWrapper>
        <Swiper
          modules={[Pagination, A11y, Autoplay]}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 3000,
          }}
          speed={2000}
          pagination={{
            el: '.swiper-pagination',
            clickable: true,
            renderBullet: (_index, className) => {
              return `<span class="${className}"></span>`;
            },
          }}
        >
          {testimonials.map(({ _id, testimonial, username }) => (
            <SwiperSlide key={_id}>
              <Card>
                <Text>{testimonial}</Text>
                <Author>{username}</Author>
              </Card>
            </SwiperSlide>
          ))}

          <SwiperPagination className="swiper-pagination"></SwiperPagination>
        </Swiper>
      </SliderWrapper>
    </>
  );
};

export default Testimonials;
