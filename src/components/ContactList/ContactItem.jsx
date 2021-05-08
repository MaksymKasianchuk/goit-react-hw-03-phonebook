import PropTypes from 'prop-types';

import styles from './ContactList.module.css';

const ContactItem = ({ contact, onDeleteContact }) => {
  const { id, name, number } = contact;

  return (
    <li className={styles.ContactItem}>
      <span>
        {name}:
        <a
          className={styles.phoneNumber}
          href={'tel:' + number}
          aria-label="Call"
        >
          {number}
        </a>
      </span>
      <button className={styles.contactBtn} onClick={() => onDeleteContact(id)}>
        Delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactItem;