function FilterCheckbox({ values, handleChange }) {
  return (
    <div className="checkbox">
      <input
        type="checkbox"
        name="checkbox"
        id="checkbox"
        className="checkbox__input"
        checked={values.checkbox || false}
        onChange={handleChange}
      />
      <label htmlFor="checkbox" className="checkbox__label">Короткометражки</label>
    </div>
  );
}

export default FilterCheckbox;
