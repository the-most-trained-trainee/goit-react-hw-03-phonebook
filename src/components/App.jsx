import React from 'react';
import { nanoid } from 'nanoid';
import Container from './StyledContainer';
import ContactForm from './ContactForm';
import ContactList from './ContactList';

class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
  };

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
