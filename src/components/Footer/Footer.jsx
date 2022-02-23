function Footer() {
  return (
    <footer className="footer page__section">
      <p className="footer__text">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <div className="footer__container">
        <div className="footer__copyright">© 2022</div>
        <div className="footer__link-container">
          <a href="https://practicum.yandex.ru/" target="_blank" className="footer__link link" rel="noreferrer">
            Яндекс.Практикум
          </a>
          <a href="https://github.com/valeria-sapegina" target="_blank" className="footer__link link" rel="noreferrer">
            Github
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
