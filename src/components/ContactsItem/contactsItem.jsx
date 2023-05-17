import React from "react";
import PropTypes from 'prop-types';

const ContactsItem = ({ contacts, onDelete }) => {
    return contacts.map(({id, name, number}) => (
                <li key={id}>
                    <span>{name}</span>
                    <span>{number}</span>
                    <button onClick={() => onDelete(id)} type='button'>Delete</button>
                </li>
            ))
}

export default ContactsItem;

ContactsItem.propTypes = {
    contacts: PropTypes.arrayOf(
    PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    })
    ).isRequired,
};