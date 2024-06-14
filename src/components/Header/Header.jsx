import React from 'react';
import AuthHeader from '../AuthHeader';
import { useLocation } from 'react-router-dom';
import UnauthHeader from '../UnauthHeader';
import { getIsLoggedIn } from '../../redux/auth/authSelectors';
import { useSelector } from 'react-redux';

const Header = ({user, onSignUpClick , onSignInClick}) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const isAuthenticated = useSelector(getIsLoggedIn);

  return (
    <>
      {isAuthenticated ? (
        <AuthHeader isHomePage={isHomePage} user={user} />
      ) : (
        <UnauthHeader
          isHomePage={isHomePage}
          onSignInClick={onSignInClick}
          onSignUpClick={onSignUpClick}
        />
      )}
    </>
  );
};

export default Header;
