import React, { useState, useContext, useEffect } from "react";
import AlertContext from "../../context/alerts/alertContext";
import AuthContext from "../../context/contact/auth/authContext";
const Register = () => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    password2: ""
  });

  const { setAlert } = alertContext;
  const { register, error, clearErrors } = authContext;

  useEffect(() => {
    if (error) {
      setAlert(error, "danger");
      clearErrors();
    }
  }, [error]);

  const { name, email, password, password2 } = user;

  const changeFunction = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const submitFunction = e => {
    e.preventDefault();
    if (name === "" || email === "" || password === "") {
      setAlert("Please enter all fields", "danger");
    } else if (password !== password2) {
      setAlert("Passwords do not match", "danger");
    } else {
      register({
        name,
        email,
        password
      });
    }
  };
  return (
    <div className="form-contaner">
      <h1>
        Account <span className="text-primary">Register </span>
      </h1>
      <form onSubmit={submitFunction}>
        <div className="form=group">
          <label htmlFor="name"> Name </label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={changeFunction}
            required
          />
        </div>
        <div className="form=group">
          <label htmlFor="name"> Email </label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={changeFunction}
            required
          />
        </div>
        <div className="form=group">
          <label htmlFor="name"> Password </label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={changeFunction}
            required
          />
        </div>
        <div className="form=group">
          <label htmlFor="name"> Confirm Password </label>
          <input
            type="password"
            name="password2"
            value={password2}
            onChange={changeFunction}
            required
          />
        </div>

        <input
          type="submit"
          value="Register"
          className="btn btn-primary btn-block"
        />
      </form>
    </div>
  );
};

export default Register;
