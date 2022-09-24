import React from 'react';
import { nanoid } from 'nanoid';
import Container from './StyledContainer';
import ContactForm from './ContactForm';
import ContactList from './ContactList';

class App extends React.Component {
  state = {
    contacts: [],
  };

  componentDidMount() {
    const localContacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(localContacts);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  contactSubmit = data => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, { ...data, id: nanoid() }],
    }));
  };

  onDelete = id => {
    const updatedContacts = this.state.contacts.filter(
      contact => contact.id !== id
    );
    this.setState({ contacts: updatedContacts });
  };

  render() {
    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm
          onSubmit={this.contactSubmit}
          contacts={this.state.contacts}
        />
        <h2>Contacts</h2>
        <ContactList onDelete={this.onDelete} contacts={this.state.contacts} />
      </Container>
    );
  }
}

export default App;
