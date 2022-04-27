import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchOrdersThunk } from '../store/allOrders';
import OrdersTable from './OrdersTable';

export class Orders extends Component {
  componentDidMount() {
    this.props.fetchOrders();
  }
  render() {
    return (
      <div id="all-orders">
        {this.props.orders.length ? (
          <OrdersTable />
        ) : (
          <div>
            <h1>There are no orders</h1>
          </div>
        )}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    orders: state.allOrders,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchOrders: () => dispatch(fetchOrdersThunk()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Orders);
