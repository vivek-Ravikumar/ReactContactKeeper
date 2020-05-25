import React, { useReducer } from "react";

import uuid from "uuid";
import ContactContext from "./contactsContext";
import contactReducer from "./contactsReducer";
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACT,
  CLEAR_FILTER
} from "../types";

const ContactState = props => {
  const initialState = {
    contacts: [
      {
        type: "personal",
        _id: "5ec386eabd42dd0b2176bd4e",
        user: "5ec37f0a43b80d04bf1eb60d",
        name: "Alfred Dany",
        email: "dany@test.com",
        phone: "123123",
        __v: 0
      },
      {
        type: "professional",
        _id: "5ec38725bd42dd0b2176bd4f",
        user: "5ec37f0a43b80d04bf1eb60d",
        name: "Rohit",
        email: "rohit@test.com",
        phone: "456456",
        __v: 0
      },
      {
        type: "personal",
        _id: "5ec38725bd42dd0b2176bd4h",
        user: "5ec37f0a43b80d04bf1eb60d",
        name: "Satheesh",
        email: "satz@test.com",
        phone: "456456",
        __v: 0
      }
    ],
    current: null,
    filtered: null
  };
  const [state, dispatch] = useReducer(contactReducer, initialState);

  //add contact
  const addContact = contact => {
    contact.id = 4564;
    dispatch({ type: ADD_CONTACT, payload: contact });
  };
  //delete contact

  const deleteContact = id => {
    dispatch({ type: DELETE_CONTACT, payload: id });
  };

  //set current contact
  const setCurrent = contact => {
    dispatch({ type: SET_CURRENT, payload: contact });
  };
  //clear current contact
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };
  //update contact
  const updateContact = contact => {
    dispatch({ type: UPDATE_CONTACT, payload: contact });
  };
  //filter contact
  const filterContact = text => {
    dispatch({ type: FILTER_CONTACT, payload: text });
  };

  //clear filter

  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        current: state.current,
        filtered: state.filtered,
        addContact,
        deleteContact,
        setCurrent,
        clearCurrent,
        updateContact,
        filterContact,
        clearFilter
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
