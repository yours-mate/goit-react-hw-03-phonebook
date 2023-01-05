import PropTypes from 'prop-types';
import css from '../Filter/Filter.module.css';

export function Filter({ handleFilterState }) {
  return (
    <div>
      <label className={css.search__label}>
        Find contacts by name
        <input onChange={handleFilterState}></input>
      </label>
    </div>
  );
}

Filter.propTypes = {
  handleFilterState: PropTypes.func,
};
