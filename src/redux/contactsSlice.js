import { createSlice } from '@reduxjs/toolkit';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { contacts: [] },
  reducers: {
    addContact(state, action) {
      state.contacts.push(action.payload);
    },

    deleteContact(state, action) {
      // return state.contacts.filter(
      //   filterContact => filterContact.id !== action.payload
      // );
      if (
        state.contacts.filter(
          filterContact => filterContact.id !== action.payload
        ) === []
      ) {
        state.contacts = [];
      } else {
        state.contacts = state.contacts.filter(
          filterContact => filterContact.id !== action.payload
        );
      }
    },
  },
});

export const { getLocalStorageContacts, addContact, deleteContact } =
  contactsSlice.actions;
