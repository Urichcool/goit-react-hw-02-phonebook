import {
    ContactsList
} from './App,styled'
import AppContactsItem from './AppContactsItem';
import PropTypes from 'prop-types';

const AppContactsList = ({contacts, filter}) => {
    return (<ContactsList>
        {contacts
            .filter(contact =>
                contact.name
                    .toLowerCase()
                    .includes(filter.toLowerCase().trim())
            )
            .map(({ name, id, number }) => (
                <AppContactsItem
                    name={name}
                    key={id}
                    number={number}
                />
            ))}
    </ContactsList>
    );
}

export default AppContactsList

AppContactsList.propTypes = {
    contacts: PropTypes.array.isRequired,
    filter: PropTypes.string.isRequired
}