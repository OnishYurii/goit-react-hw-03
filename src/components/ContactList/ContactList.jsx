import { Contact } from '../Contact/Contact';

export const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>
          <Contact item={contact} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
};
