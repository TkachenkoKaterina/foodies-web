import Container from '../../ui-kit/Container';
import { MainTitle, Subtitle } from '../../ui-kit';
import CategoryList from '../CategoryList';

import styles from './Categories.module.scss';

const Categories = ({ handlerCategoryChoose }) => {
  return (
    <section className={styles['categories-section']}>
      <Container>
        <MainTitle text={'Categories'} />
        <div className={styles['categories-description']}>
          <Subtitle
            text={
              'Discover a limitless world of culinary possibilities and enjoy exquisite recipes that combine taste, style and the warm atmosphere of the kitchen.'
            }
          />
        </div>
        <CategoryList handlerCategoryChoose={handlerCategoryChoose} />
      </Container>
    </section>
  );
};

export default Categories;
