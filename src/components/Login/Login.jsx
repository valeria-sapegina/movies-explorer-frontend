import { Link } from 'react-router-dom';
import logoImg from '../../images/logo.svg';
import { useFormWithValidation } from '../../utils/validation';

function Login({ onLogin }) {
  const {
    // eslint-disable-next-line no-unused-vars
    values, handleChange, resetFrom, errors, isValid,
  } = useFormWithValidation();

  function handleSubmit(e) {
    e.preventDefault();
    onLogin(values);
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
        <form className="auth-form" onSubmit={handleSubmit} noValidate>
          <label className="auth-form__input">
            E-mail
            <input
              type="email"
              name="email"
              id="email"
              className="auth-form__textfield"
              placeholder="Введите e-mail"
              value={values.email || ''}
              onChange={handleChange}
              minLength={2}
              required
            />
            <span className="auth-form__error">
              {errors.email || ''}
            </span>
          </label>
          <label className="auth-form__input">
            Пароль
            <input
              type="password"
              name="password"
              id="password"
              className="auth-form__textfield"
              placeholder="Введите пароль"
              value={values.password || ''}
              onChange={handleChange}
              minLength={6}
              maxLength={30}
              required
            />
            <span className="auth-form__error">
              {errors.password || ''}
            </span>
          </label>
          <div className="auth-form__button-container">
            <button
              className={`auth-form__button button ${
                !isValid && 'button_disabled'
              }`}
              type="submit"
              disabled={!isValid}
            >
              Войти
            </button>
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
