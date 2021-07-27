import React, { Component } from "react";
import { TextField, Typography, Button } from "@material-ui/core";
import { useStyles } from "./login.modul";
import { login } from "../constant";

export default function LoginForm(props) {
  const classes = useStyles();
  const btn = true ? (
    <Button
      variant="contained"
      color="primary"
      className={classes.btn}
      onClick={props.submit}
    >
      {login.loginBtn}
    </Button>
  ) : (
    <Button
      variant="contained"
      color="primary"
      className={classes.btn}
      disabled
    >
      {login.loginBtn}
    </Button>
  );
  return (
    <div className={classes.root}>
      <Typography variant="h1" className={classes.title}>
        {login.login}
      </Typography>
      <TextField
        required
        id="standard-required"
        label={login.email}
        className={classes.big}
        value={props.state.email}
        onChange={(e) => props.metod("email", e.target.value)}
      />
      <TextField
        required
        id="standard-required"
        label={login.password}
        className={classes.big}
        type="password"
        value={props.state.password}
        onChange={(e) => props.metod("password", e.target.value)}
      />

      {btn}
    </div>
  );
}
