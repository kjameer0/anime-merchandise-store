import React, { Component, Suspense } from 'react';
import { connect } from 'react-redux';
import SingleOrderItem from './SingleOrderItem';
import { clearOrder, fetchOrderThunk } from '../store/singleOrder';
export class Confirmation extends Component {
  componentWillUnmount() {
    this.props.clearOrder();
  }
  componentDidMount() {
    if (this.props.order.summary) return;
    this.props.fetchOrder(this.props.match.params.id);
  }
  render() {
    const { order } = this.props;
    return this.props.order.summary ? (
      <div>
        <h1>Confirmation</h1>
        <p>{order.summary.Confirmation}</p>
        {order.items.map((item) => {
          return <SingleOrderItem key={item.id} order={item} />;
        })}

        <p>SubTotal : ${order.summary.totalPrice / 100}</p>
      </div>
    ) : (
      <div>
        <h3>waiting...</h3>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ order: state.order });
const mapDispatchToProps = (dispatch) => ({
  fetchOrder: (confirmation) => dispatch(fetchOrderThunk(confirmation)),
  clearOrder: () => dispatch(clearOrder()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Confirmation);
