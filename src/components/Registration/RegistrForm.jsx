import React, { Component } from "react";
import { TextField, Typography, Button } from "@material-ui/core";
import { useStyles } from "./registration.modul";
import { registration } from "../constant";

export default function RegistrForm(props) {
  const classes = useStyles();
  const btn = true ? (
    <Button
      variant="contained"
      color="primary"
      className={classes.btn}
      onClick={props.submit}
    >
      {registration.registBtn}
    </Button>
  ) : (
    <Button
      variant="contained"
      color="primary"
      className={classes.btn}
      disabled
    >
      {registration.registBtn}
    </Button>
  );
  return (
    <div className={classes.root}>
      <Typography variant="h1" className={classes.title}>
        {registration.registration}
      </Typography>
      <TextField
        required
        id="standard-required"
        label={registration.name}
        className={classes.small}
        value={props.state.name}
        onChange={(e) => props.metod("name", e.target.value)}
      />
      <TextField
        required
        id="standard-required"
        label={registration.surname}
        className={classes.small}
        value={props.state.surname}
        onChange={(e) => props.metod("surname", e.target.value)}
      />
      <TextField
        required
        id="standard-required"
        label={registration.email}
        className={classes.big}
        value={props.state.email}
        onChange={(e) => props.metod("email", e.target.value)}
      />
      <TextField
        required
        id="standard-required"
        label={registration.password}
        className={classes.small}
        type="password"
        value={props.state.password}
        onChange={(e) => props.metod("password", e.target.value)}
      />
      <TextField
        required
        id="standard-required"
        label={registration.confirm}
        className={classes.small}
        type="password"
        value={props.state.confirmPassword}
        onChange={(e) => props.metod("confirm", e.target.value)}
      />
      {btn}
    </div>
  );
}
