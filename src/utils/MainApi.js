/* eslint-disable quote-props */
import checkResponse from './utils';

class MainApi {
  constructor(baseUrl) {
    this._baseUrl = baseUrl;
  }

  updateUser = (token, name, email) => fetch(`${this._baseUrl}/users/me`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify({
      name,
      email,
    }),
  })
    .then(checkResponse);

  saveMovie = (token, movie) => {
    const {
      country,
      director,
      duration,
      year,
      description,
      trailerLink,
      nameRU,
      nameEN,
      id,
    } = movie;
    const image = `https://api.nomoreparties.co${movie.image.url}`;
    const thumbnail = `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`;

    return fetch(`${this._baseUrl}/movies`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({
        country: country ?? 'empty',
        director,
        duration,
        year,
        description,
        image,
        trailerLink,
        nameRU,
        nameEN: nameEN.length === 0 ? 'nameEN' : nameEN,
        thumbnail,
        movieId: id,
      }),
    }).then(checkResponse);
  };

  getSavedMovies = (token) => fetch(`${this._baseUrl}/movies`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
  }).then(checkResponse);

  deleteMovie = (token, id) => fetch(`${this._baseUrl}/movies/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
  }).then(checkResponse);
}

const mainApi = new MainApi('https://api.diploma.movies.nomoredomains.work/api');

export default mainApi;
