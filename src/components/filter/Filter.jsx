// Filter.js
import React from 'react';
import styles from './Filter.module.css';
import { Form } from 'react-bootstrap';
import PropTypes from 'prop-types';

const Filter = ({ filter, handleFilterChange }) => (
  
    <Form.Group className="mb-3" controlId="formGroupNumber">
        <Form.Label className={styles.list}>Search contacts by name:
            <Form.Control
                        type="text" 
                        name="number"
                        value={filter}
                        placeholder="search contact by name"
                        required
                        onChange={handleFilterChange}
                        />
        </Form.Label>                
    </Form.Group>

);

Filter.propTypes = {
    filter: PropTypes.string,
    handleFilterChange: PropTypes.func
  }

export default Filter;
