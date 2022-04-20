import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../store";

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

export default connect(mapState, mapDispatch)(Navbar);
