import React, { useState } from 'react';
import styles from './Layout.module.scss';
import Header from '../Header';
import Footer from '../Footer';

const Layout = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleSignInClick = () => {
    setIsAuthenticated(true); 
  };

  const handleSignUpClick = () => {
    setIsAuthenticated(true); 
  };

  return (
    <div className={styles.wrapper}>
      <Header 
      isAuthenticated={isAuthenticated} 
      onSignInClick={handleSignInClick} 
      onSignUpClick={handleSignUpClick} 
      />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
