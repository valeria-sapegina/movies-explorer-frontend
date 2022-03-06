/* eslint-disable no-unused-vars */
import React from 'react';
import Header from '../Header/Header';
import { useFormWithValidation } from '../../utils/validation';
import CurrentUserContext from '../../contexts/CurrentUserContext';

function Profile({ onSignOut, onUserUpdate, isUserUpdateSuccess }) {
  const currentUser = React.useContext(CurrentUserContext);

  const [isActive, setIsActive] = React.useState(false);
  const [idDisable, setIsDisable] = React.useState(false);
  const {
    values, handleChange, resetFrom, errors, isValid,
  } = useFormWithValidation();

  React.useEffect(() => {
    if (values.name === currentUser.name && values.email === currentUser.email) {
      setIsDisable(true);
    } else {
      setIsDisable(false);
    }
  }, [values]);

  React.useEffect(() => {
    if (currentUser) {
      resetFrom(currentUser, {}, true);
    }
  }, [currentUser, resetFrom]);

  function handleSubmit(e) {
    e.preventDefault();
    onUserUpdate(values);
  }

  function activateForm() {
    setIsActive(true);
  }

  return (
    <>
      <Header isLooggedIn />
      <div className="profile">
        <div className="profile__container">
          <h2 className="profile__title">
            Привет,
            {' '}
            {currentUser.name}
            !
          </h2>
          <div className="profile__form-container">
            <form className="profile__form" onSubmit={handleSubmit} noValidate>
              <div className="profile__form-input-container">
                <div className="profile__form-input-wrapper">
                  <label className="profile__input-label">Имя</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="profile__form-input"
                    placeholder="Введите имя"
                    value={values.name || ''}
                    onChange={handleChange}
                    minLength={2}
                    maxLength={30}
                    pattern="^[(A-ZА-ЯЁa-zа-яё \-)]*$"
                    required
                    disabled={!isActive ? true : undefined}
                  />
                </div>
                <span className="profile__form-error">
                  {errors.name || ''}
                </span>
              </div>
              <div className="profile__form-input-container">
                <div className="profile__form-input-wrapper">
                  <label className="profile__input-label">E-mail</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="profile__form-input"
                    placeholder="Введите e-mail"
                    value={values.email || ''}
                    onChange={handleChange}
                    minLength={2}
                    required
                    disabled={!isActive ? true : undefined}
                  />
                </div>
                <span className="profile__form-error">
                  {errors.email || ''}
                </span>
              </div>

              <div className="message">
                {isUserUpdateSuccess
                && <p className="message__text">Данные успешно обновлены!</p>}
              </div>

              <div className="profile__button-container">
                {!isActive ? (
                  <>
                    <div className="profile__button-wrapper">
                      <button type="button" className="profile__button-edit button" onClick={activateForm}>Редактировать</button>
                    </div>
                    <div className="profile__button-wrapper">
                      <button type="button" className="profile__button-quit button" onClick={onSignOut}>Выйти из аккаунта</button>
                    </div>
                  </>
                ) : (
                  <button
                    type="submit"
                    className={`profile__button-submit button ${
                      (idDisable && isValid) && 'button_disabled'
                    }`}
                  >
                    Сохранить

                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>

  );
}

export default Profile;
