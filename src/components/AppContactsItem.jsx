import { ContactsListItem } from './App,styled';
import PropTypes from 'prop-types';

const AppContactsItem = ({ name, number }) => {
    
  return (
    <ContactsListItem>
            {name}: {number}
          </ContactsListItem>
        )
  ;
};

export default AppContactsItem;

AppContactsItem.propTypes = {
    name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
}