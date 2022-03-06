import React from 'react';

function ErrorModal({ active, setActive, errorMessage }) {
  React.useEffect(() => {
    if (active) {
      setTimeout(() => {
        setActive(false);
      }, 5000);
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
