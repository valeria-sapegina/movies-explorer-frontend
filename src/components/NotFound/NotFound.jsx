import {
  useNavigate,
} from 'react-router-dom';

function NotFound() {
  const navigate = useNavigate();

  return (
    <section className="not-found">
      <div className="not-found__container">
        <h2 className="not-found__title">404</h2>
        <h2 className="not-found__subtitle">Страница не найдена</h2>
      </div>
      <div className="not-found__button-container">
        <button className="not-found__button button" type="button" onClick={() => navigate(-1)}>Назад</button>
      </div>
    </section>
  );
}

export default NotFound;
