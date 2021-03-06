/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
import {
  Routes,
  Route,
  useNavigate,
} from 'react-router-dom';
import React from 'react';

import auth from '../../utils/AuthApi';
import mainApi from '../../utils/MainApi';
import moviesApi from '../../utils/MoviesApi';

import filter from '../../utils/filtration';

import CurrentUserContext from '../../contexts/CurrentUserContext';

import Main from '../Main/Main';
import NotFound from '../NotFound/NotFound';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import ErrorModal from '../ErrorModal/ErrorModal';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import {
  DISPLAY_WIDTH,
  DISPLAY_WIDTH_MIN,
  TABLET_WIDTH_MIN,
  DISPLAY_CARD_COUNT,
  TABLET_CARD_COUNT,
  MOBILE_CARD_COUNT,
  DISPLAY_L_CARD_ADD,
  DISPLAY_CARD_ADD,
  TABLET_AND_MOBILE_CARD_ADD,
} from '../../utils/constants';

function App() {
  const [errorModalActive, setErrorModalActive] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState(null);

  const [currentUser, setCurrentUser] = React.useState({});
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  const navigate = useNavigate();

  const [isAuthChecking, setIsAuthChecking] = React.useState(true);

  function checkTokenandGetUser(token) {
    setIsAuthChecking(true);
    auth.getUser(token)
      .then((res) => {
        setIsLoggedIn(true);
        setCurrentUser(res);
      })
      .catch(() => {
        localStorage.removeItem('token');
      })
      .finally(() => setIsAuthChecking(false));
  }

  React.useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      if (window.location.pathname === '/signup' || window.location.pathname === '/signin') {
        navigate('/movies');
      }
      checkTokenandGetUser(token);
    } else {
      setIsAuthChecking(false);
    }
  }, []);

  function login({ email, password }) {
    auth.login(email, password)
      .then((res) => {
        if (res.token) {
          localStorage.setItem('token', res.token);
          checkTokenandGetUser(res.token);
          setIsLoggedIn(true);
          navigate('/movies');
        }
      })
      .catch((err) => {
        setErrorMessage(err.message);
        setErrorModalActive(true);
      });
  }

  function register({ name, email, password }) {
    auth.register(name, email, password)
      .then(() => {
        login({ email, password });
      })
      .catch((err) => {
        setErrorMessage(err.message);
        setErrorModalActive(true);
      });
  }
  const [requestInput, setRequsetInput] = React.useState({});

  function signOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('checkbox');
    localStorage.removeItem('movie');
    setIsLoggedIn(false);
    setRequsetInput({});
    navigate('/');
  }

  const [isSaveUserDataButtonActive, setIsSaveUserDataButtonActive] = React.useState(false);
  const [isUserUpdateSuccess, setIsUserUpdateSuccess] = React.useState(false);
  function onUserUpdate({ name, email }) {
    const token = localStorage.getItem('token');
    mainApi.updateUser(token, name, email)
      .then((res) => {
        setCurrentUser(res);
        setIsUserUpdateSuccess(true);
        setTimeout(() => setIsUserUpdateSuccess(false), 4000);
      })
      .catch((err) => {
        setErrorMessage(err.message);
        setErrorModalActive(true);
      }).finally(() => setIsSaveUserDataButtonActive(false));
  }

  const [isSendingRequest, setIsSendingRequest] = React.useState(false);
  const [movies, setMovies] = React.useState([]);
  const [filteredMovies, setFilteredMovies] = React.useState([]);
  const [moviesForView, setMoviesForView] = React.useState([]);
  const [isMoreButtonActive, setIsMoreButtonActive] = React.useState(false);
  const [width, setWidth] = React.useState(window.innerWidth);
  const [isEmptySavedMovies, setIsEmptySavedMovies] = React.useState(false);

  React.useEffect(() => {
    const token = localStorage.getItem('token');
    setMovies([]);
    setMoviesForView([]);
    setFilteredMovies([]);
    setIsSendingRequest(true);

    if (window.location.pathname === '/saved-movies') {
      mainApi.getSavedMovies(token)
        .then((res) => {
          setIsEmptySavedMovies(res.length === 0);
          setMovies(res);
        }).catch(() => {
          setErrorModalActive(true);
          setErrorMessage('???? ?????????? ?????????????? ?????????????????? ????????????. ????????????????, ???????????????? ?? ?????????????????????? ?????? ???????????? ????????????????????. ?????????????????? ?????????????? ?? ???????????????????? ?????? ??????');
        }).finally(() => setIsSendingRequest(false));
    }

    if (window.location.pathname === '/movies') {
      setIsSendingRequest(true);
      Promise.all([
        mainApi.getSavedMovies(token),
        moviesApi.getMovies(),
      ]).then((res) => {
        const allMovies = res[1];
        const savedMovies = res[0];
        allMovies.forEach((movie) => {
          const elem = savedMovies.find((saveMovie) => saveMovie.movieId === movie.id);
          if (elem) {
            movie.isSave = true;
            movie._id = elem._id;
          }
        });

        setMovies(allMovies);
      }).catch(() => {
        setErrorModalActive(true);
        setErrorMessage('???? ?????????? ?????????????? ?????????????????? ????????????. ????????????????, ???????????????? ?? ?????????????????????? ?????? ???????????? ????????????????????. ?????????????????? ?????????????? ?? ???????????????????? ?????? ??????');
      }).finally(() => setIsSendingRequest(false));
    }
  }, [window.location.pathname]);

  function handleResize() {
    setWidth(window.innerWidth);
  }

  React.useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  function getFilmsByRequest(request) {
    if (movies.length !== 0) {
      setFilteredMovies(filter(request, movies));
    }
    if (window.location.pathname === '/movies') {
      localStorage.setItem('checkbox', request.checkbox);
      localStorage.setItem('movie', request.movie);
    }
  }

  React.useEffect(() => {
    // eslint-disable-next-line no-prototype-builtins
    if (requestInput.hasOwnProperty('movie')) {
      getFilmsByRequest(requestInput);
    }
  }, [requestInput, movies]);

  function checkMoreButton(viewMovies, movies) {
    if (viewMovies < movies && viewMovies !== 0 && movies !== 0) {
      setIsMoreButtonActive(true);
    } else {
      setIsMoreButtonActive(false);
    }
  }

  React.useEffect(() => {
    let res = [];
    if (width >= DISPLAY_WIDTH_MIN) {
      res = filteredMovies.slice(0, DISPLAY_CARD_COUNT);
      setMoviesForView(res);
    } else if (width >= TABLET_WIDTH_MIN) {
      res = filteredMovies.slice(0, TABLET_CARD_COUNT);
      setMoviesForView(res);
    } else {
      res = filteredMovies.slice(0, MOBILE_CARD_COUNT);
      setMoviesForView(res);
    }
    checkMoreButton(res.length, filteredMovies.length);
  }, [filteredMovies, width]);

  function addMoreFilms() {
    const index = moviesForView.length;
    let res = [];

    if (width >= DISPLAY_WIDTH) {
      res = moviesForView.concat(filteredMovies.slice(index, index + DISPLAY_L_CARD_ADD));
      setMoviesForView(res);
    }
    if (width < DISPLAY_WIDTH && width >= DISPLAY_WIDTH_MIN) {
      res = moviesForView.concat(filteredMovies.slice(index, index + DISPLAY_CARD_ADD));
      setMoviesForView(res);
    }
    if (width < DISPLAY_WIDTH_MIN) {
      res = moviesForView.concat(filteredMovies.slice(index, index + TABLET_AND_MOBILE_CARD_ADD));
      setMoviesForView(res);
    }

    checkMoreButton(res.length, filteredMovies.length);
  }

  function saveMovie(movie) {
    const token = localStorage.getItem('token');
    mainApi.saveMovie(token, movie).then((res) => {
      const newMovie = { ...movie };
      newMovie.isSave = true;
      newMovie._id = res.data._id;
      setMovies((state) => state.map((m) => (m.id === movie.id ? newMovie : m)));
    })
      .catch((err) => {
        setErrorModalActive(true);
        setErrorMessage(err.message);
      });
  }

  function unsaveMovie(movie) {
    const token = localStorage.getItem('token');
    mainApi.deleteMovie(token, movie._id).then((res) => {
      const newMovie = { ...movie };
      newMovie.isSave = false;
      setMovies((state) => state.map((m) => (m.id === movie.id ? newMovie : m)));
    }).catch((err) => {
      setErrorModalActive(true);
      setErrorMessage(err.message);
    });
  }

  function deleteMovie(movie) {
    const token = localStorage.getItem('token');
    mainApi.deleteMovie(token, movie._id).then((res) => {
      const index = movies.findIndex((m) => m.movieId === res.movieId);
      const newMovies = [...movies];
      newMovies.splice(index, 1);
      setMovies(newMovies);
      if (newMovies.length === 0) {
        setIsEmptySavedMovies(true);
      }
    }).catch((err) => {
      setErrorModalActive(true);
      setErrorMessage(err.message);
    });
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Routes>
          <Route path="/" exact element={<Main isLoggedIn={isLoggedIn} />} />
          <Route path="/" element={<ProtectedRoute isLoggedIn={isLoggedIn} isAuthChecking={isAuthChecking} />}>
            <Route
              path="movies"
              element={(
                <Movies
                  errorMessage={setErrorMessage}
                  errorActive={setErrorModalActive}
                  setRequset={setRequsetInput}
                  isSendingRequest={isSendingRequest}
                  movies={moviesForView}
                  onMoreButton={addMoreFilms}
                  isMoreButtonActive={isMoreButtonActive}
                  getFilmsByRequest={getFilmsByRequest}
                  saveMovie={saveMovie}
                  unsaveMovie={unsaveMovie}
                />
              )}
            />
            <Route
              path="saved-movies"
              element={(
                <SavedMovies
                  errorMessage={setErrorMessage}
                  errorActive={setErrorModalActive}
                  setRequset={setRequsetInput}
                  isSendingRequest={isSendingRequest}
                  movies={moviesForView}
                  onMoreButton={addMoreFilms}
                  isMoreButtonActive={isMoreButtonActive}
                  getFilmsByRequest={getFilmsByRequest}
                  deleteMovie={deleteMovie}
                  isEmptySavedMovies={isEmptySavedMovies}
                />
              )}
            />
            <Route
              path="profile"
              element={(
                <Profile
                  onSignOut={signOut}
                  onUserUpdate={onUserUpdate}
                  isUserUpdateSuccess={isUserUpdateSuccess}
                  isActive={isSaveUserDataButtonActive}
                  setIsActive={setIsSaveUserDataButtonActive}
                />
)}
            />
          </Route>

          <Route path="/" element={<Main />} />
          <Route path="signup" element={<Register onRegister={register} />} />
          <Route path="signin" element={<Login onLogin={login} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <ErrorModal
          active={errorModalActive}
          setActive={setErrorModalActive}
          errorMessage={errorMessage}
          setErrorMessage={setErrorMessage}
        />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
