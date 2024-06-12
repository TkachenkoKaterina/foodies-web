import Container from '../../ui-kit/Container';
import CategoryList from '../CategoryList';

import css from './Categories.module.scss';

const Categories = () => {
    return (
        <section className={css['categories-section']}>
            <Container>
                <h2 className={css['categories-title']}>Categories</h2>
                <p className={css['categories-description']}>
                    Discover a limitless world of culinary possibilities
                    and enjoy exquisite recipes that combine taste,
                    style and the warm atmosphere of the kitchen.
                </p>
                <CategoryList />
            </Container>
        </section>
    );
};

export default Categories;