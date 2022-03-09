import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({
  isSavedMoviesPage,
  movies,
  onMoreButton,
  isMoreButtonActive,
  saveMovie,
  unsaveMovie,
  deleteMovie,
}) {
  return (
    <section className="movies-card-list page__section">
      <ul className="movies-card-list__card-container">
        {
                      movies.map((movie) => (
                        <MoviesCard
                          key={isSavedMoviesPage ? movie.movieId : movie.id}
                          card={movie}
                          isSavedMoviesPage={isSavedMoviesPage}
                          saveMovie={saveMovie}
                          unsaveMovie={unsaveMovie}
                          deleteMovie={deleteMovie}
                        />
                      ))
                  }
      </ul>
      {isMoreButtonActive
            && <button type="button" className="movies-card-list__button button" onClick={onMoreButton}>Еще</button>}
    </section>
  );
}

export default MoviesCardList;
