import { Component } from 'react';
import { v4 as randomID } from 'uuid';

import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';
import Container from './components/Container';

import styles from './App.css';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const localContacts = JSON.parse(localStorage.getItem('contacts'));
    if (localContacts) {
      this.setState({ contacts: localContacts });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    const { contacts } = this.state;
    if (contacts.length !== prevState.contacts.length) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }
  addNewContact = (name, number) => {
    const contact = {
      id: randomID(),
      name,
      number,
    };

    const { contacts } = this.state;

    if (!name || !number) {
      alert('Please enter the correct name and number');
      return;
    }

    contacts.find(({ name }) => name === contact.name)
      ? alert(`${name} is already in contacts`)
      : this.setState(({ contacts }) => ({
          contacts: [contact, ...contacts],
        }));
  };

  handleChangeFilter = event => {
    this.setState({
      filter: event.currentTarget.value,
    });
  };

  getContactsToShow = () => {
    const { filter, contacts } = this.state;

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  handleDeleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { filter } = this.state;
    const contactsToShow = this.getContactsToShow();

    return (
      <Container>
        <div className={styles.phoneBookWrapper}>
          <h1 className={styles.title}>Phonebook</h1>
          <ContactForm onSubmit={this.addNewContact} />
        </div>
        <div className={styles.contactsWrapper}>
          <h2 className={styles.titleContacts}>Contacts</h2>
          <Filter value={filter} onChangeFilter={this.handleChangeFilter} />
          <ContactList
            contacts={contactsToShow}
            onDeleteContact={this.handleDeleteContact}
          />
        </div>
      </Container>
    );
  }
}

export default App;