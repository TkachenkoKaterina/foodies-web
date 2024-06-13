import Hero from '../../components/Hero';
import Recipes from '../../components/Recipes';
import Categories from '../../components/Categories';

import Testimonials from '../../components/Testimonials';
// import styles from './HomePage.module.scss';
import { useState } from 'react';

const HomePage = () => {
  const [category, setCategory] = useState('');
  // const categoryBtn = document.querySelector();
  const handlerCategoryChoose = e => {
    e.preventDefault();
    if (e.target.nodeName === 'IMG') {
      setCategory(e.target.alt);
    }
  };
  const goToCategory = e => {
    e.preventDefault();
    setCategory(false);
  };
  return (
    <>
      <Hero />
      {!category && (
        <Categories handlerCategoryChoose={handlerCategoryChoose} />
      )}
      {category && <Recipes category={category} onClick={goToCategory} />}

      {<Testimonials />}
    </>
  );
};

export default HomePage;
