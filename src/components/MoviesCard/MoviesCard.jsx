function MoviesCard({
  card, isSavedMoviesPage, saveMovie, unsaveMovie, deleteMovie,
}) {
  const { isSave } = card;

  const cardSaveButtonClassName = `movies-card__save-button button ${
    isSave && 'movies-card__save-button_active'
  }`;

  const src = card.image.url ? `https://api.nomoreparties.co${card.image.url}` : card.image;

  function handleSaveClick() {
    if (!card.isSave) {
      saveMovie(card);
    } else {
      unsaveMovie(card);
    }
  }

  function handleDeleteClick() {
    deleteMovie(card);
  }

  function getDurationStr() {
    const hour = Math.floor(card.duration / 60);
    const min = card.duration - (hour * 60);
    return `${hour}ч ${min}м`;
  }

  return (
    <li className="movies-card">
      <a className="movies-card__link" href={card.trailerLink} target="_blank" rel="noreferrer">
        <img
          className="movies-card__image"
          src={src}
          alt={card.nameRU}
        />
      </a>
      <div className="movies-card__description">
        <div className="movies-card__title-container">
          <p className="movies-card__title" title={card.nameRU}>{card.nameRU}</p>
          {!isSavedMoviesPage
            && (
              <button
                type="button"
                className={cardSaveButtonClassName}
                onClick={handleSaveClick}
              />
            )}
          {isSavedMoviesPage
            && (
              <button
                type="button"
                className="movies-card__delete-button button"
                onClick={handleDeleteClick}
              />
            )}
        </div>
        <p className="movies-card__duration">
          {getDurationStr()}
        </p>
      </div>
    </li>
  );
}

export default MoviesCard;
