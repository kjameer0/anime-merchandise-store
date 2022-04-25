import React, { Component } from 'react';
import { connect } from 'react-redux';
import SingleOrderItem from './SingleOrderItem';
export class Confirmation extends Component {
  render() {
    const { order } = this.props;
    return (
      <div>
        <h1>Confirmation</h1>
        <p>{order.summary.Confirmation}</p>
        {order.items.map((item) => {
          return <SingleOrderItem key={item.id} order={item} />;
        })}

        <p>SubTotal : ${order.summary.totalPrice}</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ order: state.order });

export default connect(mapStateToProps)(Confirmation);
