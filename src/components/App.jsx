import { Component } from "react";
import {
  ContactsContainer,
  ContactsTitle,
  ContactsApp
} from "./App,styled";
import AppAddContactsForm from "./AppAddContactsForm";
import AppContactsList from "./AppContactsList";
import AppContactsInput from "./AppContactsFilterInput";




export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  formSubmitHandler = data => {
    this.setState({ contacts: [...data] });
  };

  formInputHandler = data => {
    this.setState({ filter: data });
  };

  render() {
    return (
      <ContactsContainer>
        <ContactsApp>
          <ContactsTitle>Phonebook</ContactsTitle>
          <AppAddContactsForm onSubmit={this.formSubmitHandler} />
          <ContactsTitle>Contacts</ContactsTitle>
          <AppContactsInput
            filter={this.formInputHandler} />
          <AppContactsList
            contacts={this.state.contacts}
            filter={this.state.filter}
          />
        </ContactsApp>
      </ContactsContainer>
    );
  }
};
