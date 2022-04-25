import React from "react";
import { connect } from "react-redux";
import SelectQuantity from "./SelectQuantity";
/**
 * COMPONENT
 *
 */
function handleChange(e) {
  console.log();
}
export const Orders = (props) => {
  const { username, password, email, firstName, lastName, address } = props;

  return (
    <div>
      <h3>Welcome, to Order History {username}</h3>
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
    firstName: state.auth.firstname,
    lastName: state.auth.lastname,
    address: state.auth.address,
  };
};

export default connect(mapState)(Orders);
