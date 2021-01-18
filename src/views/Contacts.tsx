import React from 'react';
import ListContacts from '../components/ListContacts';

const Contacts: React.FC = () => (
    <ListContacts contacts={JSON.parse(localStorage.getItem("contacts") || '[]')} />
);

export default Contacts;