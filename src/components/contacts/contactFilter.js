import React, { useContext, useRef, useEffect } from "react";

import ContactContext from "../../context/contact/contactsContext";

const ContactFilter = () => {
  const contactContext = useContext(ContactContext);

  const { filterContact, clearFilter, filtered } = contactContext;
  const text = useRef("");

  useEffect(() => {
    if (filtered === null) {
      text.current.value = "";
    }
  });
  const changeFunction = e => {
    if (text.current.value !== "") {
      filterContact(e.target.value);
    } else {
      clearFilter();
    }
  };
  return (
    <form>
      <input
        ref={text}
        type="text"
        placeholder="Filter contacts..."
        onChange={changeFunction}
      />
    </form>
  );
};

export default ContactFilter;
