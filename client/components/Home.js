import React from 'react';
import { connect } from 'react-redux';
import SelectQuantity from './SelectQuantity';
/**
 * COMPONENT
 *
 */
function handleChange(e) {
  console.log();
}
export const Home = (props) => {
  const { username } = props;

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

export default connect(mapState)(Home);
