/* eslint-disable no-unused-vars */
import React from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import { useFormWithValidation } from '../../utils/validation';

function SearchForm({
  errorMessage, errorActive, setRequset, getFilmsByRequest,
}) {
  const {
    // eslint-disable-next-line no-unused-vars
    values, handleChange, resetFrom, errors, isValid,
  } = useFormWithValidation();

  React.useEffect(() => {
    let req;
    if (window.location.pathname === '/movies') {
      const movie = localStorage.getItem('movie');
      const c = localStorage.getItem('checkbox');

      if (movie != null && c != null && movie !== 'undefined' && c !== 'undefined') {
        req = {
          movie,
          checkbox: JSON.parse(c),
        };
      } else {
        req = {
          movie: '',
          checkbox: false,
        };
      }
    } else if (window.location.pathname === '/saved-movies') {
      req = {
        movie: '',
        checkbox: false,
      };
    }

    resetFrom(req);
    setRequset(req);
  }, []);

  function submit(event) {
    event.preventDefault();
    if (!values.movie) {
      errorMessage('Нужно ввести ключевое слово');
      errorActive(true);
    } else {
      setRequset(values);
    }
  }

  return (
    <section className="search-form page__section">
      <form className="search-form__container" onSubmit={submit} noValidate>
        <div className="search-form__input-container">
          <input
            type="text"
            name="movie"
            id="movie"
            className="search-form__input"
            placeholder="Фильм"
            value={values.movie || ''}
            onChange={handleChange}
          />
          <button
            className="search-form__button button"
            type="submit"
          >
            Поиск
          </button>
        </div>

        <FilterCheckbox values={values} handleChange={handleChange} />
      </form>
    </section>
  );
}

export default SearchForm;
