import { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './ContactForm.module.css';

class ContactForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    name: '',
    number: '',
  };

  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    const { name, number } = this.state;

    this.props.onSubmit(name, number);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form className={styles.ContactForm} onSubmit={this.handleFormSubmit}>
        <label className={styles.formLabel}>
          <span className={styles.formText}>Name</span>
          <input
            className={styles.formInput}
            type="text"
            placeholder="Enter contact's name"
            name="name"
            value={name}
            onChange={this.handleChange}
          />
        </label>
        <label className={styles.formLabel}>
          <span className={styles.formText}>Number</span>
          <input
            className={styles.formInput}
            type="tel"
            placeholder="Enter contact's number"
            name="number"
            value={number}
            onChange={this.handleChange}
          />
        </label>

        <button className={styles.formBtn} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;