import React from 'react';
import Header from '../Header/Header';
import user from '../../utils/user';

function Profile() {
  const [isActive, setIsActive] = React.useState(false);
  const [userName, setUserName] = React.useState(user.name);
  const [userEmail, setUserEmail] = React.useState(user.email);

  function handleChange(e) {
    const { name } = e.target;
    const { value } = e.target;
    if (name === 'email') {
      setUserEmail(value);
    } else if (name === 'name') {
      setUserName(value);
    }
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
            {user.name}
            !
          </h2>
          <div className="profile__form-container">
            <form className="profile__form">
              <div className="profile__form-input-container">
                <label className="profile__input-label">Имя</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="profile__form-input"
                  placeholder="Введите имя"
                  value={userName}
                  onChange={handleChange}
                  minLength={2}
                  maxLength={30}
                  required
                  disabled={!isActive ? true : undefined}
                />
              </div>
              <div className="profile__form-input-container">
                <label className="profile__input-label">E-mail</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="profile__form-input"
                  placeholder="Введите e-mail"
                  value={userEmail}
                  onChange={handleChange}
                  minLength={2}
                  required
                  disabled={!isActive ? true : undefined}
                />
              </div>

              <div className="profile__button-container">
                {!isActive ? (
                  <>
                    <div className="profile__button-wrapper">
                      <button type="button" className="profile__button-edit button" onClick={activateForm}>Редактировать</button>
                    </div>
                    <div className="profile__button-wrapper">
                      <button type="button" className="profile__button-quit button">Выйти из аккаунта</button>
                    </div>
                  </>
                ) : (
                  <>
                    <p className="profile__error"> </p>
                    <button type="submit" className="profile__button-submit button">Сохранить</button>
                  </>
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
