import React, { Component } from "react";
import Header from "../Header/Header";
import { getLocalStorage, setSessionStorage } from "../Helper/helper";
import LoginForm from "./LoginForm";

export default class Login extends React.Component {
  state = {
    email: "",
    password: "",
  };
  handleChange = (field, value) => {
    if (field === "email") {
      this.setState((prevState) => ({
        email: value,
      }));
    }
    if (field === "password") {
      this.setState((prevState) => ({
        password: value,
      }));
    }
  };
  handleSubmit = () => {
    if (getLocalStorage("users")) {
      let users = getLocalStorage("users");
      const res = users.filter(
        (elm) =>
          elm.email === this.state.email && elm.password === this.state.password
      );
      if (res.length > 0) {
        setSessionStorage("id", res[0].id);
        window.location = "/profile/id=" + res[0].id;
      }
    } else {
      window.location = "/registration";
    }
  };
  render() {
    return (
      <div>
        <Header />
        <LoginForm
          state={this.state}
          metod={this.handleChange}
          submit={this.handleSubmit}
        />
      </div>
    );
  }
}
