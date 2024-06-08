import React from 'react';
import AuthHeader from '../AuthHeader';
import UnauthHeader from '../UnauthHeader';

const Header = ({ isAuthenticated, onSignInClick, onSignUpClick }) => {
  return (
    // <AuthHeader />
    isAuthenticated ? 
      <AuthHeader /> :
      <UnauthHeader onSignInClick={onSignInClick} onSignUpClick={onSignUpClick} />
  );
};

export default Header;
