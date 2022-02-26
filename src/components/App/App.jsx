import {
  Routes,
  Route,
} from 'react-router-dom';
import React from 'react';

import Main from '../Main/Main';
import NotFound from '../NotFound/NotFound';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import ErrorModal from '../ErrorModal/ErrorModal';

function App() {
  const [errorModalActive, setErrorModalActive] = React.useState(false);

  // React.useEffect(() => {
  //   setTimeout(() => {
  //     setErrorModalActive(true);
  //   }, 5000);
  // }, []);

  return (
    <div className="page">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="movies" element={<Movies />} />
        <Route path="saved-movies" element={<SavedMovies />} />
        <Route path="profile" element={<Profile />} />
        <Route path="signup" element={<Register />} />
        <Route path="signin" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <ErrorModal active={errorModalActive} setActive={setErrorModalActive} />
    </div>
  );
}

export default App;
