import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../../images/logo.svg';

function Login() {
  const [userEmail, setUserEmail] = React.useState('');
  const [userPassword, setUserPassword] = React.useState('');

  function handleChange(e) {
    const { name } = e.target;
    const { value } = e.target;
    if (name === 'email') {
      setUserEmail(value);
    } else if (name === 'password') {
      setUserPassword(value);
    }
  }

  return (
    <div className="auth">
      <div className="auth__container">
        <Link to="/">
          <img
            src={logoImg}
            alt="Логотип"
            className="auth__logo"
          />
        </Link>
        <h2 className="auth__title">Рады видеть!</h2>
        <form className="auth-form">
          <label className="auth-form__input">
            E-mail
            <input
              type="email"
              name="email"
              id="email"
              className="auth-form__textfield"
              placeholder="Введите e-mail"
              value={userEmail}
              onChange={handleChange}
              minLength={2}
              required
            />
          </label>
          <label className="auth-form__input">
            Пароль
            <input
              type="password"
              name="password"
              id="password"
              className="auth-form__textfield"
              placeholder="Введите пароль"
              value={userPassword}
              onChange={handleChange}
              minLength={6}
              maxLength={30}
              required
            />
          </label>
          <div className="auth-form__button-container">
            <button className="auth-form__button button" type="submit">Войти</button>
          </div>
          <p className="auth-form__text">
            Ещё не зарегистрированы?
            <Link className="auth-form__link link" to="/signup">Регистрация</Link>
          </p>

        </form>
      </div>
    </div>

  );
}

export default Login;
