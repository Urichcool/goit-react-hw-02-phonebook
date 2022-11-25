import { Component } from "react";
import {
 ContactsAddForm,
    ContactsAddButton,
    ContactsListLabel,
} from './App,styled'
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

const contactArr = [];

class AddContactsForm extends Component {
    static propTypes = {
  onSubmit: PropTypes.func.isRequired
  };

  state = {
    name: '',
    number: '',
  };

  handleInputChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleFormSubmit = e => {
    e.preventDefault();
    contactArr.push({
      name: this.state.name,
      id: nanoid(),
      number: this.state.number,
    });
    this.props.onSubmit(contactArr);
    this.handleFormReset();
  };

  handleFormReset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <ContactsAddForm autoComplete="off" onSubmit={this.handleFormSubmit}>
        <ContactsListLabel>
          Name
          <input
            type="text"
            value={this.state.name}
            onChange={this.handleInputChange}
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </ContactsListLabel>
        <ContactsListLabel>
          Number
          <input
            type="tel"
            value={this.state.number}
            onChange={this.handleInputChange}
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </ContactsListLabel>
        <ContactsAddButton type="submit">Add contact</ContactsAddButton>
      </ContactsAddForm>
    );
  }
}

export default AddContactsForm;