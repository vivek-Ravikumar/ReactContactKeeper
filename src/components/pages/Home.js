import React, { Fragment } from "react";
import Contacts from "../contacts/Contacts";
import ContactForm from "../contacts/contactForm";
import ContactFilter from "../contacts/contactFilter";
const Home = () => {
  return (
    <Fragment>
      {" "}
      <h1>Home Page </h1>
      <ContactForm />
      <ContactFilter />
      <Contacts />
    </Fragment>
  );
};

export default Home;
