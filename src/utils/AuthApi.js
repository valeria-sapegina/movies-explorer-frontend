/* eslint-disable quote-props */
import checkResponse from './utils';

class Auth {
  constructor(baseUrl) {
    this._baseUrl = baseUrl;
  }

  register = (name, email, password) => fetch(`${this._baseUrl}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, email, password }),
  })
    .then(checkResponse);

  login = (email, password) => fetch(`${this._baseUrl}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      password,
    }),
  })
    .then(checkResponse);

  getUser = (token) => fetch(`${this._baseUrl}/users/me`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
  })
    .then(checkResponse);
}

const auth = new Auth('http://api.diploma.movies.nomoredomains.work/api');

export default auth;
