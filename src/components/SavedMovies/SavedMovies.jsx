import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

function SavedMovies({
  errorMessage,
  errorActive,
  setRequset,
  isSendingRequest,
  movies,
  onMoreButton,
  isMoreButtonActive,
  getFilmsByRequest,
  isMadeRequest,
  deleteMovie,
  isEmptySavedMovies,
}) {
  return (
    <>
      <Header isLooggedIn />
      <main className="saved-movies">
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
        ) : (!isEmptySavedMovies
          && (
          <MoviesCardList
            isSavedMoviesPage
            movies={movies}
            onMoreButton={onMoreButton}
            isMoreButtonActive={isMoreButtonActive}
            isMadeRequest={isMadeRequest}
            deleteMovie={deleteMovie}
          />
          )
        )}
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;
