import Container from '../../ui-kit/Container';

import css from './Hero.module.scss';

const Hero = () => {
    return (
        <section>
            <Container>
                <div className={css.hero}>
                    <h1 className={css['hero-title']}>Improve Your Culinary Talents</h1>
                    <p className={css['hero-description']}>Amazing recipes for beginners in the world of cooking, enveloping you in the aromas and tastes of various cuisines.</p>
                    <button className={css['hero-button']}>Add recipe</button>
                    <div className={css['hero-wrapper-img']}></div>
                </div>
            </Container>
        </section>
    );
};

export default Hero;