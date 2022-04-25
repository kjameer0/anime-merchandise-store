import React from 'react';
import { connect } from 'react-redux';
import SelectQuantity from './SelectQuantity';
import { setCartThunk } from '../store/cart';
/**
 * COMPONENT
 *
 */
function handleChange(e) {
  console.log();
}
export const Home =  (props) => {
  const { username } = props;
  props.setCart()
  return (
    <div>
      <h3>Welcome, {username}</h3>
    </div>
  );
};

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    username: state.auth.username,
  };
};
const mapDispatch = (dispatch) => {
  return {
    setCart: () => dispatch(setCartThunk()),
  }
}
export default connect(mapState, mapDispatch)(Home);
