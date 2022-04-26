import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchOrdersThunk } from '../store/allOrders';
/**
 * COMPONENT
 *
 */

export class Orders extends Component {
  componentDidMount() {
    this.props.fetchOrders();
  }
  render() {
    const { orders } = this.props;
    return (
      <table>
        <tr>
          <th>confirmation</th>
          <th>totalPrice</th>
          <th>createdAt</th>
        </tr>
        {orders.map((order) => {
          return (
            <tr key={order.id}>
              <th>{order.confirmation}</th>
              <th>{order.totalPrice}</th>
              <th>{order.createdAt}</th>
            </tr>
          );
        })}
      </table>
    );
  }
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    orders: state.allOrders,
    username: state.auth.username,
    password: state.auth.password,
    email: state.auth.email,
    firstName: state.auth.firstname,
    lastName: state.auth.lastname,
    address: state.auth.address,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchOrders: () => dispatch(fetchOrdersThunk()),
  };
};
export default connect(mapState, mapDispatchToProps)(Orders);
