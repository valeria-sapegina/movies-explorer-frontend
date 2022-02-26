function AboutMe() {
  return (
    <section className="about-me page__section">
      <div className="section-title">
        <h2 className="section-title__text">Студент</h2>
      </div>
      <div className="about-me__container">
        <div className="about-me__text">
          <h3 className="about-me__name">Валерия</h3>
          <p className="about-me__description">Фронтенд-разработчик, 24 года</p>
          <p className="about-me__paragraph">
            В 2019 году окончила Южно-Уральский государственный университет
            по направлению «Информационная безопасность». Проработав несколько лет по
            специальности, поняла что это не то, чем я хочу заниматься. После
            прохождения бо́льшой части курса по профессии «Веб-разработчик» от Яндекс.Практикум
            смогла найти новую работу и теперь я младший инженер-программист :)
          </p>
          <div className="about-me__link-container">
            <a href="https://github.com/valeria-sapegina" target="_blank" className="about-me__link link" rel="noreferrer">
              Github
            </a>
          </div>
        </div>
        <div className="about-me__photo" />
      </div>
    </section>
  );
}

export default AboutMe;
