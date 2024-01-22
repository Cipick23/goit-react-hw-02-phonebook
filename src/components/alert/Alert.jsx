import Alert from 'react-bootstrap/Alert';
import React from 'react';

function BasicAlert({ name, number, showAlert, onClose }) {
  return (
    showAlert && (
      <Alert variant="warning" onClose={onClose} dismissible>
        Contactul cu numele {name} sau numărul {number} există deja.
      </Alert>
    )
  );
}

export default BasicAlert;