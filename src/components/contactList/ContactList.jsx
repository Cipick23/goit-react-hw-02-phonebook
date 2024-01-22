// ContactList.js
import React from 'react';
import { ListGroup, Button } from 'react-bootstrap';
import styles from './ContactList.module.css'
import PropTypes from 'prop-types';

const ContactList = ({ contacts, filter, onDeleteContact }) => {
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ListGroup>
        {filteredContacts.map((contact) => (
        <ListGroup.Item key={contact.id} className={styles.list}>
            <span>{contact.name}:</span>
            <span>{contact.number}</span>
            <Button
            variant="danger"
            className="float-end"
            onClick={() => onDeleteContact(contact.id)}
          >
            Delete
          </Button>
        </ListGroup.Item>
        ))}
    </ListGroup>
  );
};

ContactList.propTypes = {
  filter: PropTypes.string,
  handleFilterChange: PropTypes.string
}

export default ContactList;