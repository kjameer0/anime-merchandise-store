import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../store";
import { makeStyles, withStyles } from "@material-ui/core/styles";

import { AppBar, Toolbar, Button } from "@material-ui/core";

const useStyles = theme => ({
  root: {
    flexGrow: 1,
  },
  logo: {
    flexGrow: 1,
  },
  navbarNav: {},
  cartInfo: {
    position: "absolute",
    background: "rgba(220, 220, 220, .5)",
    borderRadius: "50%",
    width: "20px",
    height: "20px",
    textAlign: "center",
    display: "inline-block",
    marginLeft: "3rem",
    marginBottom: "1.5rem",
  },
});

class Navbar extends Component {
  render() {
    const { handleClick, isLoggedIn, cart, classes } = this.props;
    console.log(cart.length);
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
                    {cart.length > 0 ? (
                      <span className={classes.cartInfo}>{cart.length}</span>
                    ) : (
                      <span style={{ display: "hidden" }}></span>
                    )}
                    My Cart
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
                    <span className={classes.cartInfo}>{cart.length}</span>
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
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.auth.id,
    cart: state.cart,
  };
};

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout());
    },
  };
};

export default connect(mapState, mapDispatch)(withStyles(useStyles)(Navbar));
