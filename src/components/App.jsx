import React, { Component } from 'react';
import'bootstrap/dist/css/bootstrap.min.css'
import { nanoid } from 'nanoid';
import ContactForm from './contactForm/ContactForm';
import Filter from './filter/Filter';
import ContactList from './contactList/ContactList';
import { Card } from 'react-bootstrap';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = (contact) => {
    const newContact = { id: nanoid(), ...contact };
    this.setState((prevState) => ({ contacts: [...prevState.contacts, newContact] }));
  };

  handleFilterChange = (e) => {
    this.setState({ filter: e.target.value });
  };

  onDeleteContact = (id) => {
    const updatedContacts = this.state.contacts.filter((contact) => contact.id !== id);
    this.setState({ contacts: updatedContacts });
  };
  

  render() {
    return (
      <Card className='background'>
        <h1>Phonebook</h1>
        <ContactForm 
          contacts={this.state.contacts} 
          addContact={this.addContact} 
        />
        
        <Filter 
          filter={this.state.filter} 
          handleFilterChange={this.handleFilterChange} 
        />

        <ContactList 
          contacts={this.state.contacts} 
          filter={this.state.filter} 
          onDeleteContact={this.onDeleteContact}
        />

      </Card>
    );
  }
}

export default App;
