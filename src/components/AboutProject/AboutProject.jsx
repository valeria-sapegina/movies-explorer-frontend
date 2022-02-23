function AboutProject() {
  return (
    <section className="about-project page__section">
      <div className="section-title">
        <h2 className="section-title__text">О проекте</h2>
      </div>
      <div className="about-project__info">
        <div className="about-project__column">
          <h3 className="about-project__subtitle">Дипломный проект включал 5 этапов</h3>
          <p className="about-project__paragraph">
            Составление плана, работу над бэкендом, вёрстку,
            добавление функциональности и финальные доработки.
          </p>
        </div>
        <div className="about-project__column">
          <h3 className="about-project__subtitle">На выполнение диплома ушло 5 недель</h3>
          <p className="about-project__paragraph">
            У каждого этапа был мягкий и жёсткий дедлайн,
            которые нужно было соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className="about-project__progress progress">
        <div className="progress__backend">
          <div className="progress__bar progress__bar_backend">
            <p className="progress__text-inside">1 неделя</p>
          </div>
          <p className="progress__text-outside">Back-end</p>
        </div>
        <div className="progress__frontend">
          <div className="progress__bar progress__bar_frontend">
            <p className="progress__text-inside">4 недели</p>
          </div>
          <p className="progress__text-outside">Front-end</p>
        </div>
      </div>

    </section>
  );
}

export default AboutProject;
