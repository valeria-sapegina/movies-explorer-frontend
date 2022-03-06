import checkResponse from './utils';

class MoviesApi {
  constructor(baseUrl) {
    this._baseUrl = baseUrl;
  }

  getMovies() {
    return fetch(this._baseUrl)
      .then(checkResponse);
  }
}

const moviesApi = new MoviesApi('https://api.nomoreparties.co/beatfilm-movies');
export default moviesApi;
