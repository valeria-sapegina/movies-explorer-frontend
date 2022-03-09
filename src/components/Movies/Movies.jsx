/* eslint-disable no-nested-ternary */
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

function Movies({
  errorMessage,
  errorActive,
  setRequset,
  isSendingRequest,
  movies,
  onMoreButton,
  isMoreButtonActive,
  getFilmsByRequest,
  saveMovie,
  unsaveMovie,
}) {
  return (
    <>
      <Header isLooggedIn />
      <main className="movies">
        <SearchForm
          errorMessage={errorMessage}
          errorActive={errorActive}
          setRequset={setRequset}
          getFilmsByRequest={getFilmsByRequest}
        />
        {(isSendingRequest) ? (
          <div className="preloader-page">
            <Preloader />
          </div>
        ) : (movies.length !== 0 ? (
          <MoviesCardList
            isSavedMoviesPage={false}
            movies={movies}
            onMoreButton={onMoreButton}
            isMoreButtonActive={isMoreButtonActive}
            saveMovie={saveMovie}
            unsaveMovie={unsaveMovie}
          />
        ) : (
          <div className="movies-card-list page__section">
            <p className="movies-card-list__empty">
              Ничего не найдено
            </p>
          </div>
        )
        )}
      </main>
      <Footer />
    </>
  );
}

export default Movies;
