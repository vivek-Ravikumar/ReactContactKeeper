import React, { Fragment, useState, useContext, useEffect } from "react";
import ContactContext from "../../context/contact/contactsContext";
const ContactForm = () => {
  const contactContext = useContext(ContactContext);
  const { addContact, current, clearCurrent, updateContact } = contactContext;

  useEffect(() => {
    if (current !== null) {
      setContact(current);
    } else {
      setContact({
        name: "",
        email: "",
        phone: "",
        type: "personal"
      });
    }
  }, [contactContext, current]);

  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    type: "personal"
  });

  const { name, email, phone, type } = contact;
  const changeFunction = event => {
    setContact({ ...contact, [event.target.name]: event.target.value });
  };

  const clearAll = () => {
    clearCurrent();
  };

  const onSubmitFunction = e => {
    e.preventDefault();

    if (current) {
      // const { _id, name, email, phone, type } = current;
      // const contact = {
      //   _id,
      //   name,
      //   email,
      //   phone,
      //   type
      // };
      console.log(contact);
      updateContact(contact);
      clearCurrent();
    } else {
      addContact(contact);
      clearCurrent();
    }

    setContact({
      name: "",
      email: "",
      phone: "",
      type: "personal"
    });
  };
  return (
    <Fragment>
      <form onSubmit={onSubmitFunction}>
        <h2 className="text=primary">
          {" "}
          {current === null ? "Add contact" : "update Contact"}{" "}
        </h2>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={name}
          onChange={changeFunction}
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={changeFunction}
        />
        <input
          type="text"
          placeholder="Phone"
          name="phone"
          value={phone}
          onChange={changeFunction}
        />
        <h5> Contact Type </h5>
        <input
          type="radio"
          name="type"
          value="personal"
          checked={type === "personal"}
          onChange={changeFunction}
        />
        Personal{" "}
        <input
          type="radio"
          name="type"
          value="professional"
          checked={type === "professional"}
          onChange={changeFunction}
        />
        Professional{" "}
        <div>
          <input
            type="submit"
            value={current === null ? "Add contact" : "update Contact"}
            className="btn btn-primary btn-block"
          />
        </div>
        {current && (
          <div>
            <button className="btn btn-light btn-block" onClick={clearAll}>
              Clear
            </button>
          </div>
        )}
      </form>
    </Fragment>
  );
};

export default ContactForm;
