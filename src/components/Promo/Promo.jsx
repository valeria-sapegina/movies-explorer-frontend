import promoImg from '../../images/promo_img.svg';

function Promo() {
  return (
    <section className="promo page__section">
      <h1 className="promo__title">
        Учебный проект студента
        {' '}
        <br />
        {' '}
        факультета Веб-разработки.
      </h1>
      <img
        src={promoImg}
        alt="Промо"
        className="promo__img"
      />
    </section>
  );
}

export default Promo;
