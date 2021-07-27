import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { header } from "../constant";
import { useStyles } from "./header.modul";
import { getSessionStorage } from "../Helper/helper";
import { Link } from "react-router-dom";
export default function Header() {
  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const Profile = () => {
    handleClose();
    window.location = "/profile/id=" + getSessionStorage("id");
  };
  const logOut = () => {
    handleClose();
    sessionStorage.clear();
    window.location = "/";
  };
  const logIn = () => {
    handleClose();
    window.location = "/login";
  };
  const registr = () => {
    handleClose();
    window.location = "/registration";
  };

  const items = getSessionStorage("id") ? (
    <div>
      <MenuItem onClick={Profile}>{header.profile}</MenuItem>
      <MenuItem onClick={logOut}>{header.logOut}</MenuItem>
    </div>
  ) : (
    <div>
      <MenuItem onClick={logIn}>{header.logIn}</MenuItem>
      <MenuItem onClick={registr}>{header.registration}</MenuItem>
    </div>
  );
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h1"
            className={classes.title}
            onClick={() => (window.location = "/")}
          >
            {header.title}
          </Typography>
          {auth && (
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={open}
                onClose={handleClose}
              >
                {items}
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
