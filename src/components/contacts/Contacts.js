import React, { useContext, Fragment } from "react";
import ContactItem from "./ContactItem";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import ContactContext from "../../context/contact/contactsContext";

const Contacts = () => {
  const contactContext = useContext(ContactContext);
  const { contacts, filtered } = contactContext;
  return (
    <Fragment>
      <TransitionGroup>
        {!filtered &&
          contacts.map(contact => (
            <CSSTransition key={contact._id} timeout={500} classNames="item">
              <ContactItem key={contact._id} contact={contact} />
            </CSSTransition>
          ))}

        {filtered &&
          filtered.map(contact => (
            <CSSTransition key={contact._id} timeout={500} classNames="item">
              <ContactItem key={contact._id} contact={contact} />
            </CSSTransition>
          ))}
      </TransitionGroup>
    </Fragment>
  );
};

export default Contacts;
