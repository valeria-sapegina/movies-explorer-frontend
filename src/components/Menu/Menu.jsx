import { NavLink, useNavigate } from 'react-router-dom';
import profileButton from '../../images/profile-button-icon.svg';

function Menu({ menuVisibility, toggleMenu }) {
  const navigate = useNavigate();

  function onProfileButtonClick() {
    navigate('/profile');
  }

  return (
    <div className={`menu ${menuVisibility && 'menu_is-opened'}`}>
      <div className="menu__content">
        <button type="button" onClick={toggleMenu} className="menu__button-close button" />
        <ul className="menu__link-container">
          <li className="menu__link-item">
            <NavLink
              className={({ isActive }) => (isActive
                ? 'menu__link menu__link_active link' : 'menu__link link')}
              to="/"
            >
              Главная
            </NavLink>
          </li>
          <li className="menu__link-item">
            <NavLink
              className={({ isActive }) => (isActive ? 'menu__link menu__link_active link' : 'menu__link link')}
              to="/movies"
            >
              Фильмы

            </NavLink>
          </li>
          <li className="menu__link-item">
            <NavLink
              className={({ isActive }) => (isActive ? 'menu__link menu__link_active link' : 'menu__link link')}
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
  );
}

export default Menu;
