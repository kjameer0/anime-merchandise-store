import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../store";
import { makeStyles } from "@material-ui/core/styles";

import { AppBar, Toolbar, Button } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  logo: {
    flexGrow: 1,
  },
  navbarNav: {},
}));

const NewNavbar = ({ handleClick, isLoggedIn }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <div className={classes.logo}>
            <h5>Video Game Weapon</h5>
          </div>
          <div className={classes.navbarNav}>
            {!isLoggedIn && (
              <div className="navbar-nav">
                <Button color="inherit" component={Link} to="/products">
                  Products
                </Button>

                <Button color="inherit" component={Link} to="/cart">
                  Cart
                </Button>

                <Button color="inherit" component={Link} to="/login">
                  Login
                </Button>

                <Button color="inherit" to="/signup" component={Link}>
                  Sign up
                </Button>
              </div>
            )}
            {isLoggedIn && (
              <div className="navbar-nav">
                <Button color="inherit" component={Link} to="/home">
                  Home
                </Button>
                <Button color="inherit" component={Link} to="/products">
                  Products
                </Button>
                <Button color="inherit" component={Link} to="/cart">
                  My Cart
                </Button>
                <Button color="inherit" onClick={handleClick}>
                  Logout
                </Button>
              </div>
            )}
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

const Navbar = ({ handleClick, isLoggedIn }) => (
  <div className="navbar">
    <nav>
      <h1 className="logo">
        <Link to="/">Black Market</Link>
      </h1>
      <div>
        {!isLoggedIn && (
          <div className="navbar-nav">
            <Link to="/products">Products</Link>
            <Link to="/cart">Cart</Link>
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
          </div>
        )}
        {isLoggedIn && (
          <div className="navbar-nav">
            <Link to="/home">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/cart">My Cart</Link>
            <a href="#" onClick={handleClick}>
              Logout
            </a>
          </div>
        )}
      </div>
    </nav>
    <hr />
  </div>
);

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.auth.id,
  };
};

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout());
    },
  };
};

export default connect(mapState, mapDispatch)(NewNavbar);
