import React from 'react';
import { ERROR_MODAL_DURATION } from '../../utils/constants';

function ErrorModal({
  active, setActive, errorMessage, setErrorMessage,
}) {
  React.useEffect(() => {
    if (errorMessage === 'Validation failed') {
      setErrorMessage('Пожалуйста перезагрузите страницу или попробуйте позднее');
    }
  }, [errorMessage]);

  React.useEffect(() => {
    if (active) {
      setTimeout(() => {
        setActive(false);
      }, ERROR_MODAL_DURATION);
    }
  }, [active]);

  function closeModal() {
    setActive(false);
  }

  return (
    <div className={active ? 'error-modal active' : 'error-modal'}>
      <div className="error-modal__image" />
      <div className="error-modal__message-container">
        <p className="error-modal__message-title">Ошибка</p>
        <p className="error-modal__message">{errorMessage ?? 'Пожалуйста перезагрузите страницу или попробуйте позднее'}</p>
      </div>
      <div className="error-modal__close-container">
        <button type="button" className="error-modal__close" onClick={closeModal} />
      </div>
    </div>
  );
}

export default ErrorModal;
