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
    sessionStorage.clear();
  };

  const items = getSessionStorage("id") ? (
    <div>
      <MenuItem onClick={handleClose}>{header.profile}</MenuItem>
      <MenuItem onClick={handleClose}>{header.logOut}</MenuItem>
    </div>
  ) : (
    <div>
      <Link to="/login">
        <MenuItem onClick={handleClose}>{header.logIn}</MenuItem>
      </Link>
      <Link to="/registration">
        <MenuItem onClick={handleClose}>{header.registration}</MenuItem>
      </Link>
    </div>
  );
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h1" className={classes.title}>
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
