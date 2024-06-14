import { useNavigate } from 'react-router-dom';
import { routes } from '../../constants/routes';
import styles from './Logo.module.scss';

const Logo = ({ isHomePage }) => {
  const navigate = useNavigate();
  const logoClassName = isHomePage ? styles.logoWhite : styles.logoBlack;
  

  const handleLogoClick = () => {
    navigate(routes.main, { replace: true });
    window.location.reload();
  };

  return (
    <span onClick={handleLogoClick} className={`${styles.logo} ${logoClassName}`}>
      foodies
    </span>
  );
};

export default Logo;
