import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import allMovies from '../../utils/movies';

function MoviesCardList({ savedMoviesPage }) {
  const [movies, setMovies] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    if (savedMoviesPage) {
      const savedMovies = [];
      allMovies.forEach((movie) => {
        if (movie.isSave) {
          savedMovies.push(movie);
        }
      });
      setMovies(savedMovies);
    } else {
      setMovies(allMovies);
    }
    setIsLoading(false);
  }, []);

  return (
    <section className="movies-card-list page__section">
      {(movies.length === 0 && isLoading) ? (
        <p className="movies-card-list__empty">{!savedMoviesPage ? 'Фильмы не найдены' : 'Нет сохраненных фильмов'}</p>
      ) : (
        <>
          <ul className="movies-card-list__card-container">
            {
                    movies.map((movie) => (
                      <MoviesCard
                        key={movie.id}
                        card={movie}
                        savedMoviesPage={savedMoviesPage}
                      />
                    ))
                }
          </ul>
          {!savedMoviesPage
                && <button type="button" className="movies-card-list__button button">Еще</button>}
        </>
      )}
    </section>
  );
}

export default MoviesCardList;
