
import React from 'react';
import { connect } from 'react-redux';
import SelectQuantity from './SelectQuantity';
import { setCartThunk } from '../store/cart';

import { Link } from "react-router-dom";

/**
 * COMPONENT
 *
 */
function handleChange(e) {
  console.log();
}
export const Home = (props) => {

  const { username, password, email, firstName, lastName, address } = props;

  return (
    <div>
      <h3>Welcome, {firstName}</h3>
      <h4>Logged in as {username}</h4>
      <nav>
        <ul>
          <Link to="/orders">
            <li>Order History</li>
          </Link>
        </ul>
      </nav>
      <div>
        <div>
          <h3>Current Infomation</h3>
          <ul>
            <li>Username: {username}</li>
            <li>First Name: {firstName}</li>
            <li>Last Name: {lastName}</li>
            <li>Email: {email}</li>
            <li>Address: {address}</li>
          </ul>
        </div>
        <div>
          <form>
            <div>
              <h2>Edit Information</h2>
              <label />
              Username:
              <input
                name="username"
                type="text"
                placeholder="username"
                defaultValue={username}
              />
              <label />
              Password:
              <input
                name="password"
                type="text"
                placeholder="password"
                defaultValue={password}
              />
              <label />
              First Name:
              <input
                name="firstName"
                type="text"
                placeholder="First Name"
                defaultValue={firstName}
              />
              <label />
              Last Name:
              <input
                name="lastName"
                type="text"
                placeholder="Last Name"
                defaultValue={lastName}
              />
              <label />
              Email:
              <input
                name="email"
                type="text"
                placeholder="email"
                defaultValue={email}
              />
              <label />
              Address:
              <input
                name="address"
                type="text"
                placeholder="address"
                defaultValue={address}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    username: state.auth.username,
    password: state.auth.password,
    email: state.auth.email,
    firstName: state.auth.firstName,
    lastName: state.auth.lastName,
    address: state.auth.address,
  };
};
const mapDispatch = (dispatch) => {
  return {
    setCart: () => dispatch(setCartThunk())
  }
}
export default connect(mapState, mapDispatch)(Home);
