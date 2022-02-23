/* eslint-disable jsx-a11y/label-has-associated-control */
function FilterCheckbox() {
  return (
    <div className="checkbox">
      <input type="checkbox" name="checkbox" id="checkbox" className="checkbox__input" />
      <label htmlFor="checkbox" className="checkbox__label">Короткометражки</label>
    </div>
  );
}

export default FilterCheckbox;
