import React, { useReducer } from "react";

import authContext from "./authContext";
import authReducer from "./authReducer";
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
  CLEAR_ERRORS
} from "../../types";

const AuthState = props => {
  const initialState = {
    token: localStorage.getItem("token"),
    isAuthenticated: null,
    loading: true,
    user: null,
    error: null
  };
  const [state, dispatch] = useReducer(authReducer, initialState);

  //load USer

  //register User
  const register = async FormData => {
    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(FormData)
    };
    try {
      const res = await fetch(
        "https://zruue.sse.codesandbox.io/api/users/",
        config
      );
      const data = await res.json();
      console.log(data);
      if (data.status === "success") {
        dispatch({
          type: REGISTER_SUCCESS,
          payload: data.token
        });
      } else {
        dispatch({
          type: REGISTER_FAIL,
          payload: data.status
        });
      }
    } catch (e) {
      dispatch({
        type: REGISTER_FAIL,
        payload: e.status
      });
    }
  };

  //Login User
  const login = () => {
    console.log("login");
  };

  //Logout
  const logout = () => {
    console.log("logout");
  };

  //clear Errors
  const clearErrors = () => {
    dispatch({ type: CLEAR_ERRORS });
  };

  return (
    <authContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        user: state.user,
        error: state.error,
        register,
        login,
        logout,
        clearErrors
      }}
    >
      {props.children}
    </authContext.Provider>
  );
};

export default AuthState;
