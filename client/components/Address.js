import React from 'react';

export default function Address(props) {
  const {
    firstName,
    lastName,
    streetAddress,
    apartment,
    city,
    state,
    postalCode,
    country,
  } = props.user;
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
