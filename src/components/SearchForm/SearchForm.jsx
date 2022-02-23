import React from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm() {
  const [request, setRequest] = React.useState('');

  function handleChange(e) {
    setRequest(e.target.value);
  }

  return (
    <section className="search-form page__section">
      <div className="search-form__container">
        <div className="search-form__input-container">
          <input
            type="text"
            name="movie"
            id="movie"
            className="search-form__input"
            placeholder="Фильм"
            value={request}
            onChange={handleChange}
          />
          <button className="search-form__button button" type="submit">Поиск</button>
        </div>
        <FilterCheckbox />
      </div>

    </section>
  );
}

export default SearchForm;
