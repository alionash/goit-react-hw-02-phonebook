import ContactsItem from 'components/ContactsItem/contactsItem';
import PropTypes from 'prop-types';

const ContactList = ({ contacts, onDelete }) => {
    return (
        <ul>
            <ContactsItem contacts={contacts} onDelete={onDelete}/>
        </ul>
    )
}
export default ContactList;

ContactList.propTypes = {
    contacts: PropTypes.array.isRequired,
    onDelete: PropTypes.func.isRequired,

}