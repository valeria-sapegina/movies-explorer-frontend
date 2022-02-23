import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import profileButton from '../../images/profile-button-icon.svg';
import Menu from '../Menu/Menu';

function Navigation() {
  const [isMenuVisible, setIsMenuVisible] = React.useState(false);
  const navigate = useNavigate();

  function onProfileButtonClick() {
    navigate('/profile');
  }

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  return (
    <div className="navigation">
      <div className="navigation__fullscreen">
        <div className="navigation__container">
          <ul className="navigation__link-container">
            <li className="navigation__link-item">
              <NavLink
                className={({ isActive }) => (isActive ? 'navigation__link navigation__link_active link' : 'navigation__link link')}
                to="/movies"
              >
                Фильмы

              </NavLink>
            </li>
            <li className="navigation__link-item">
              <NavLink
                className={({ isActive }) => (isActive ? 'navigation__link navigation__link_active link' : 'navigation__link link')}
                to="/saved-movies"
              >
                Сохраненные фильмы

              </NavLink>
            </li>
          </ul>
          <button
            type="button"
            className="navigation__button-profile button"
            onClick={onProfileButtonClick}
          >
            Аккаунт
            <img src={profileButton} alt="Иконка человечка" />
          </button>
        </div>
      </div>
      <div className="navigation__mobile">
        <button type="button" className="navigation__mobile-button button" onClick={toggleMenu} />
      </div>
      <Menu menuVisibility={isMenuVisible} toggleMenu={toggleMenu} />
    </div>
  );
}

export default Navigation;
