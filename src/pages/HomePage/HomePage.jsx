import Hero from '../../components/Hero';
import Recipes from '../../components/Recipes';
// import Categories from '../../components/Categories';

import Testimonials from '../../components/Testimonials';
import styles from './HomePage.module.scss';

const HomePage = () => {
  return (
    <>
      {/* <h2>HomePage</h2> */}
      <Hero />
      {/* <Categories /> */}
      <Recipes />
      {<Testimonials />}
    </>
  );
};

export default HomePage;
