import React from 'react';
import PropTypes from 'prop-types';
import ContactEntryStyled from './StyledContactEntry';

class ContactEntry extends React.Component {
  render() {
    return (
      <ContactEntryStyled>
        <span>{this.props.name}: </span>
        <span>{this.props.number}</span>
        <button onClick={() => this.props.onDelete(this.props.id)}>
          Delete
        </button>
      </ContactEntryStyled>
    );
  }
}

ContactEntry.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactEntry;
