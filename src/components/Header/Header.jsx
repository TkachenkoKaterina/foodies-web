import React from 'react';
import AuthHeader from '../AuthHeader';
import { useLocation } from 'react-router-dom';
import UnauthHeader from '../UnauthHeader';


const Header = ({ isAuthenticated, onSignInClick, onSignUpClick }) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';



  return (
    <AuthHeader />
    // <>
    // {isAuthenticated ? (
    //     <AuthHeader />
    //   ) : (
    //     <UnauthHeader
    //       onSignInClick={onSignInClick}
    //       onSignUpClick={onSignUpClick}
    //     />
    //   )}
    //   </>
  );
};

export default Header;
