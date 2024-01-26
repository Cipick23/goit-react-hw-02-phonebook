// ContactForm.js
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Form } from 'react-bootstrap';
import BasicAlert from 'components/alert/Alert';

const CONTACT_KEY = 'contact';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
    showAlert: false,
    list: [],
  };

  componentDidMount() {
    const storedContacts = localStorage.getItem(CONTACT_KEY);

    if (storedContacts) {
      this.setState({
        list: JSON.parse(storedContacts),
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState?.list.length !== this.state.list.length) {
      localStorage.setItem(CONTACT_KEY, JSON.stringify(this.state.list));
    }
  }
  
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
    showAlert: PropTypes.bool
  }
  
  export default ContactForm;

