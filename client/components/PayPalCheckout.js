import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import { getCostTotal } from './SubTotal';
import { orderCheckoutThunk } from '../store/singleOrder';
import { compose } from 'redux';

const CLIENT_ID =
  'AcA34C5GAOSbQO0YP7JuUdhfyzk0BlTYIt-y2UaTwolNq5NAddiOOcqKCUQHYLM6vW_KIYYJD1QLBBjj';
class PayPalCheckout extends Component {
  constructor(props) {
    super(props);
    this.state = { totalPrice: '' };
    this.createOrder = this.createOrder.bind(this);
  }
  componentDidUpdate(prevProps) {
    if (!prevProps.cart.length && this.props.cart.length) {
      this.setState({ totalPrice: getCostTotal(this.props.cart) });
    }
  }
  createOrder(data, actions) {
    const {
      email,
      firstName,
      lastName,
      streetAddress,
      apartment,
      city,
      state,
      postalCode,
      country,
    } = this.props.user;
    const { totalPrice } = this.state;
    return actions.order.create({
      intent: 'CAPTURE',
      payer: {
        name: {
          given_name: firstName,
          surname: lastName,
        },
        address: {
          address_line_1: streetAddress,
          address_line_2: apartment,
          admin_area_2: city,
          admin_area_1: state,
          postal_code: postalCode,
          country_code: country,
        },
        email_address: email,
      },
      purchase_units: [
        {
          amount: {
            currency_code: 'USD',
            value: totalPrice,
          },
        },
      ],
    });
  }
  onApprove(data, actions) {
    return actions.order.capture().then((details) => {
      this.props.checkout(details.id);
    });
  }
  render() {
    return (
      <PayPalScriptProvider options={{ 'client-id': CLIENT_ID }}>
        <PayPalButtons
          style={{ layout: 'vertical' }}
          createOrder={this.createOrder}
          onApprove={(data, actions) => this.onApprove(data, actions)}
        />
      </PayPalScriptProvider>
    );
  }
}

const mapStateToProps = (state) => ({
  cart: state.cart,
  user: {
    email: state.auth.email,
    firstName: state.auth.firstName,
    lastName: state.auth.lastName,
    streetAddress: state.auth.streetAddress,
    apartment: state.auth.apartment,
    city: state.auth.city,
    state: state.auth.state,
    postalCode: state.auth.postalCode,
    country: state.auth.country,
  },
});

const mapDispatchToProps = (dispatch, { history }) => {
  return {
    checkout: (confirmation) =>
      dispatch(orderCheckoutThunk(confirmation, history)),
  };
};

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(PayPalCheckout);
