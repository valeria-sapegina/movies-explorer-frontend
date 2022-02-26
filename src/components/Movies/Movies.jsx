import SearchForm from '../SearchForm/SearchForm';
// import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

function Movies() {
  return (
    <>
      <Header isLooggedIn />
      <main className="movies">
        <SearchForm />
        {/* <Preloader /> */}
        <MoviesCardList savedMoviesPage={false} />
        <Footer />
      </main>
    </>
  );
}

export default Movies;
