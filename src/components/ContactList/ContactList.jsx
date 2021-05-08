import ContactItem from './ContactItem';
import PropTypes from 'prop-types';

import styles from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) =>
  contacts.length === 0 ? (
    <p className={styles.notification}>Contact book is empty</p>
  ) : (
    <ul className={styles.ContactList}>
      {contacts.map(contact => {
        const { id } = contact;

        return (
          <ContactItem
            key={id}
            contact={contact}
            onDeleteContact={onDeleteContact}
          />
        );
      })}
    </ul>
  );

ContactList.defaultProps = {
  contacts: [],
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;