import React from 'react';
import PropTypes from 'prop-types';
import ContactEntry from './ContactEntry';
import ContactFinedStyled from './StyledContactFinder';
import EntriesListStyled from './StyledEntriesList';

class ContactList extends React.Component {
  state = {
    find: '',
  };

  searchRequest = e => {
    this.setState({ find: e.currentTarget.value });
  };

  getFilteredContacts = () => {
    let result = [];
    if (this.state.find === '') {
      result = this.props.contacts;
    } else {
      result = this.props.contacts.filter(contact =>
        contact.name.toUpperCase().includes(this.state.find.toUpperCase())
      );
    }
    return result;
  };

  render() {
    return (
      <ContactFinedStyled>
        <label htmlFor="">Find Contacts by Name</label>
        <input
          type="text"
          name="find"
          value={this.state.find}
          onChange={this.searchRequest}
        />
        <EntriesListStyled>
          {this.getFilteredContacts().map(contact => (
            <ContactEntry
              key={contact.id}
              id={contact.id}
              name={contact.name}
              number={contact.number}
              onDelete={this.props.onDelete}
            />
          ))}
        </EntriesListStyled>
      </ContactFinedStyled>
    );
  }
}

ContactList.propTypes = {
  onDelete: PropTypes.func.isRequired,
  contacts: PropTypes.array.isRequired,
};

export default ContactList;
