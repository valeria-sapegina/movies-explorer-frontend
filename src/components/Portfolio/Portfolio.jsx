import mainLinkImg from '../../images/main-link.svg';

function Portfolio() {
  return (
    <section className="portfolio page__section">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__links-container">
        <li className="portfolio__link-container">
          <a
            href="https://valeria-sapegina.github.io/russian-travel/"
            target="_blank"
            className="portfolio__link link"
            rel="noreferrer"
          >
            Статичный сайт

          </a>
          <img
            src={mainLinkImg}
            alt="Иконка ссылки"
            className="portfolio__img"
          />
        </li>
        <li className="portfolio__link-container">
          <a
            href="https://valeria-sapegina.github.io/russian-travel/"
            target="_blank"
            className="portfolio__link link"
            rel="noreferrer"
          >
            Адаптивный сайт

          </a>
          <img
            src={mainLinkImg}
            alt="Иконка ссылки"
            className="portfolio__img"
          />
        </li>
        <li className="portfolio__link-container">
          <a
            href="https://mesto.sapegina.nomoredomains.rocks/sign-in"
            target="_blank"
            className="portfolio__link link"
            rel="noreferrer"
          >
            Одностраничное приложение

          </a>
          <img
            src={mainLinkImg}
            alt="Иконка ссылки"
            className="portfolio__img"
          />
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
