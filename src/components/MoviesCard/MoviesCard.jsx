import React from 'react';

function MoviesCard({ card, savedMoviesPage }) {
  const [isSave, setIsSave] = React.useState(card.isSave);

  const cardSaveButtonClassName = `movies-card__save-button button ${
    isSave && 'movies-card__save-button_active'
  }`;

  function handleSaveClick() {
    setIsSave(!isSave);
  }

  function getDurationStr() {
    const hour = Math.floor(card.duration / 60);
    const min = card.duration - (hour * 60);
    return `${hour}ч ${min}м`;
  }

  return (
    <li className="movies-card">
      <img
        className="movies-card__image"
        src={card.image}
        alt={card.nameRU}
      />
      <div className="movies-card__description">
        <div className="movies-card__title-container">
          <h2 className="movies-card__title">{card.nameRU}</h2>
          {!savedMoviesPage
                        && (
                        <button
                          type="button"
                          className={cardSaveButtonClassName}
                          onClick={handleSaveClick}
                        />
                        )}
          {savedMoviesPage
                        && (
                        <button
                          type="button"
                          className="movies-card__delete-button button"
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
