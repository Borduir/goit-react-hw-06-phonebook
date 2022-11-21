import css from './ContactListItem.module.css';
import { useDispatch } from 'react-redux';

import { deleteContact } from '../../../redux/contactsSlice';
const { button, li } = css;

export default function ContactListItem(contact) {
  const dispatch = useDispatch();
  const { id, name, number } = contact;
  return (
    <li key={id} className={li}>
      {' '}
      {name} : {number}
      <button
        className={button}
        type="button"
        onClick={() => {
          dispatch(deleteContact(contact.id));
        }}
      >
        Delete
      </button>
    </li>
  );
}
