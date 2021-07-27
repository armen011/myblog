import React, { Component } from "react";
import RegistrForm from "./RegistrForm";
import {
  getLocalStorage,
  nameCorrect,
  genarateId,
  setLocalStorage,
} from "../Helper/helper";
import { Link } from "react-router-dom";
import Header from "../Header/Header";

export default class Registration extends React.Component {
  state = {
    name: "",
    surname: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  handleChange = (field, value) => {
    if (field === "name") {
      value = nameCorrect(value);
      this.setState((prevState) => ({
        name: value,
      }));
    }
    if (field === "surname") {
      value = nameCorrect(value);
      this.setState((prevState) => ({
        surname: value,
      }));
    }
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
    if (field === "confirm") {
      this.setState((prevState) => ({
        confirmPassword: value,
      }));
    }
  };
  handleSubmit = () => {
    if (getLocalStorage("users")) {
      let users = getLocalStorage("users");
      const res = users.filter((elm) => elm.email === this.state.email);
      if (res.length === 0) {
        users.push({
          id: genarateId(users),
          name: this.state.name,
          surname: this.state.surname,
          email: this.state.email,
          password: this.state.password,
        });
        setLocalStorage("users", users);
        window.location = "/login";
      }
    } else {
      const users = [
        {
          id: genarateId([]),
          name: this.state.name,
          surname: this.state.surname,
          email: this.state.email,
          password: this.state.password,
        },
      ];
      setLocalStorage("users", users);
      window.location = "/login";
    }
  };
  render() {
    return (
      <div>
        <Header />
        <RegistrForm
          state={this.state}
          metod={this.handleChange}
          submit={this.handleSubmit}
        />
      </div>
    );
  }
}
