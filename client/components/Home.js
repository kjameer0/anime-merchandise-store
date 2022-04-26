
import React from 'react';
import { connect } from 'react-redux';
import SelectQuantity from './SelectQuantity';
import { setCartThunk } from '../store/cart';

import { Link } from "react-router-dom";
<<<<<<< HEAD

=======
import { updateAuthThunk } from "../store/auth";
>>>>>>> user-profile
/**
 * COMPONENT
 *
 */
<<<<<<< HEAD
function handleChange(e) {
  console.log();
}
export const Home =  (props) => {
  const { username, password, email, firstName, lastName, address } = props;
  props.setCart()
=======

export const Home = (props) => {
  const {
    id,
    username,
    password,
    email,
    firstName,
    lastName,
    address,
    handleSubmit,
  } = props;

  // function refreshPage() {
  //   location.reload();
  // }

>>>>>>> user-profile
  return (
    <div id="user-page-container">
      <h3 id="userwelcome">Welcome, {firstName}</h3>
      <h4 id="loggedInAs">Logged in as {username}</h4>
      <nav id="userProfileNavBar">
        <ul>
          <Link to="/orders">
            <li>Order History</li>
          </Link>
          <li>
            <a>My Information</a>
          </li>
        </ul>
      </nav>
      <div className="flex-container-Auth">
        <div className="flex-left" id="currentInfoDiv">
          <h2 id="currentInfoTitle">Current Infomation</h2>
          <ul>
            <li>Username: {username}</li>
            <li>First Name: {firstName}</li>
            <li>Last Name: {lastName}</li>
            <li>Email: {email}</li>
            <li>Address: {address}</li>
          </ul>
        </div>
        <div className="flex-right">
          <form onSubmit={handleSubmit} name={name} className="no-shadow">
            <input type="hidden" name="id" value={id} />
            <div id="mailingInfoDiv">
              <h2 id="currentInfoTitle">Edit Information</h2>
              <label />
              Username:
              <input
                className="form-input input"
                name="username"
                type="text"
                placeholder="username"
                defaultValue={username}
              />
              <label />
              Password:
              <input
                className="form-input input"
                name="password"
                type="text"
                placeholder="password"
                defaultValue={password}
              />
              <label />
              First Name:
              <input
                className="form-input input"
                name="firstName"
                type="text"
                placeholder="First Name"
                defaultValue={firstName}
              />
              <label />
              Last Name:
              <input
                className="form-input input"
                name="lastName"
                type="text"
                placeholder="Last Name"
                defaultValue={lastName}
              />
              <label />
              Email:
              <input
                className="form-input input"
                name="email"
                type="text"
                placeholder="email"
                defaultValue={email}
              />
              <label />
              Address:
              <input
                className="form-input input"
                name="address"
                type="text"
                placeholder="address"
                defaultValue={address}
              />
              <button type="submit">Save</button>
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
<<<<<<< HEAD
const mapDispatch = (dispatch) => {
  return {
    setCart: () => dispatch(setCartThunk()),
  }
}
=======

const mapDispatch = (dispatch) => {
  return {
    handleSubmit(evt) {
      evt.preventDefault();
      const { target } = evt;
      const info = {
        username: target.username.value,
        password: target.password.value,
        email: target.email.value,
        firstName: target.firstName.value,
        lastName: target.lastName.value,
        address: target.address.value,
      };
      console.log(info);
      dispatch(updateAuthThunk(info));
    },
  };
};

>>>>>>> user-profile
export default connect(mapState, mapDispatch)(Home);
