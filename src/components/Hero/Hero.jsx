import Container from '../../ui-kit/Container';

import images from '../../assets/images'

import css from './Hero.module.scss';
const Hero = () => {
    return (
        <section className={css['hero-section']}>
            <Container>
                <div className={css['hero-wrapper']}>
                    <h1 className={css['hero-title']}>Improve Your Culinary Talents</h1>
                    <p className={css['hero-description']}>Amazing recipes for beginners in the world of cooking, enveloping you in the aromas and tastes of various cuisines.</p>
                    <button className={css['hero-button']}>Add recipe</button>
                    <div className={css['hero-wrapper-img']}>
                        <div className={css['hero-img-small']}>
                            <img
                                width='128'
                                src={ images.imageSmall1x }
                                srcSet={`${images.imageSmall1x} 1x,
                                    ${images.imageSmall2x} 2x,
                                    ${images.imageSmall2x} 3x`}
                                alt="food"
                            />
                        </div>
                        <div className={css['hero-img-big']}>
                            <img
                                width='302'
                                src={ images.imageBig1x }
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