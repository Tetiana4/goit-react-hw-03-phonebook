import React from 'react';
import PropTypes from 'prop-types';
import { List, ListItem, Button } from './ContactList.styled';

function ContactList({ contacts, onDelete }) {
  return (
    <List>
      {contacts.map(({ id, name, number }) => (
        <ListItem key={id}>
          {name}: {number}
          <Button onClick={() => onDelete(id)}>delete</Button>
        </ListItem>
      ))}
    </List>
  );
}
export default ContactList;

ContactList.propeTypes = {
  contact: PropTypes.array,
  onDelete: PropTypes.func,
};
