import React, { useState } from "react";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const { email, password } = user;

  const changeFunction = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const submitFunction = e => {
    e.preventDefault();
    alert("LoggedIn");
  };
  return (
    <div className="form-contaner">
      <h1>
        Account <span className="text-primary"> Login </span>
      </h1>
      <form onSubmit={submitFunction}>
        <div className="form=group">
          <label htmlFor="name"> Email </label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={changeFunction}
          />
        </div>
        <div className="form=group">
          <label htmlFor="name"> Password </label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={changeFunction}
          />
        </div>

        <input
          type="submit"
          value="Login"
          className="btn btn-primary btn-block"
        />
      </form>
    </div>
  );
};

export default Login;
