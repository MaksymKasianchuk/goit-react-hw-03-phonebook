import PropTypes from 'prop-types';

import styles from './Filter.module.css';

const Filter = ({ filter, onChangeFilter }) => (
  <label className={styles.filterLabel}>
    <span className={styles.filterText}>Find contacts by name</span>
    <input
      className={styles.filterInput}
      type="text"
      placeholder="Enter contact's name"
      value={filter}
      onChange={onChangeFilter}
    />
  </label>
);

Filter.propTypes = {
  filter: PropTypes.string,
  onChangeFilter: PropTypes.func.isRequired,
};

export default Filter;