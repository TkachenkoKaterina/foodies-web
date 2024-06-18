import React, { useState, useEffect } from 'react';
import styles from './UpButton.module.scss';

const UpButton = ({ showAfter = 700 }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > showAfter) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <button
      className={`${styles.scrollToTopButton} ${isVisible ? styles.visible : styles.hidden}`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M4 12l1.41 1.41L11 7.83v12.34h2V7.83l5.59 5.58L20 12l-8-8-8 8z" />
      </svg>
    </button>
  );
};
export default UpButton;