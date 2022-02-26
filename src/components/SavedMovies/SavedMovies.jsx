import SearchForm from '../SearchForm/SearchForm';
// import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

function SavedMovies() {
  return (
    <>
      <Header isLooggedIn />
      <main className="saved-movies">
        <SearchForm />
        {/* <Preloader /> */}
        <MoviesCardList savedMoviesPage />
        <Footer />
      </main>
    </>
  );
}

export default SavedMovies;
