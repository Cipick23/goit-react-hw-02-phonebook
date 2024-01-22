// ContactForm.js
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Form } from 'react-bootstrap';
import BasicAlert from 'components/alert/Alert';

// ...
class ContactForm extends Component {
    state = {
      name: '',
      number: '',
      showAlert: false, // Adăugăm o stare pentru a controla afișarea alertei
    };
  
    handleChange = (e) => {
      this.setState({ [e.target.name]: e.target.value });
    };
  
    handleSubmit = (e) => {
      e.preventDefault();
      const { name, number } = this.state;
  
      const isDuplicate = this.props.contacts.some(
        (contact) => contact.name.toLowerCase() === name.toLowerCase() || contact.number === number
      );
  
      if (isDuplicate) {
        this.setState({ showAlert: true });
      } else {
        this.props.addContact({ name, number });
        this.setState({ name: '', number: '', showAlert: false });
      }
    };
  
    handleAlertClose = () => {
      this.setState({ showAlert: false });
    };
  
    render() {
      const { name, number, showAlert } = this.state;
  
      return (
        <>
            <Form onSubmit={this.handleSubmit}>
                <Form.Group className="mb-3" controlId="formGroupName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                    type="text"
                    name="name"
                    value={name}
                    onChange={this.handleChange}
                    placeholder="Numele contactului"
                    required
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupNumber">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                    type="tel"
                    name="number"
                    value={number}
                    onChange={this.handleChange}
                    placeholder="Numărul de telefon"
                    required
                    />
                </Form.Group>
                <Button type="submit">Adaugă contact</Button>
            </Form>

            <BasicAlert
                name={name}
                number={number}
                showAlert={showAlert}
                onClose={this.handleAlertClose}
            />
        </>
      );
    }
  }

  ContactForm.propTypes = {
    e: PropTypes.object,
    name: PropTypes.string,
    number: PropTypes.string,
    showAlert: PropTypes.string
  }
  
  export default ContactForm;

