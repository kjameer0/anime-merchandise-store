import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Address extends Component {
  render() {
    const {
      firstName,
      lastName,
      streetAddress,
      apartment,
      city,
      state,
      postalCode,
      country,
    } = this.props.user;
    return (
      <React.Fragment>
        <div id="shipping-info">
          <h3>
            {firstName} {lastName}
          </h3>
          <p>
            {streetAddress} {apartment}
          </p>
          <p>
            {city}, {state} {postalCode}, {country}
          </p>
          <p>Days to deliver (4)</p>
          <p>Expexcted deliver date April 29, 2022</p>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
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

export default connect(mapStateToProps)(Address);
