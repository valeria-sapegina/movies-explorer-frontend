import { Link, useNavigate } from 'react-router-dom';
import logoImg from '../../images/logo.svg';
import Navigation from '../Navigation/Navigation';

function Header({ isLooggedIn }) {
  const isMain = window.location.pathname === '/';
  const navigate = useNavigate();

  function handleSinginClick() {
    navigate('/signin');
  }

  return (
    <header className={`header page__section  
          ${isMain ? 'header_page-main' : ''}`}
    >
      <Link to="/">
        <img
          src={logoImg}
          alt="Логотип"
          className="header__logo"
        />
      </Link>
      {isLooggedIn
        ? (
          <Navigation />
        ) : (
          <div className="header__link-container">
            <Link className="header__signup link" to="signup">
              Регистрация
            </Link>
            <button className="header__signin button" type="button" onClick={handleSinginClick}>
              Войти
            </button>
          </div>
        )}
    </header>
  );
}

export default Header;
