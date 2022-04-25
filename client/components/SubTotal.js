import React, { Component } from 'react';
const SubTotal = (props) => {
  const totalItem = props.items.reduce((sum, item) => sum + item.quantity, 0);
  const totalCost = props.items
    .reduce((sum, item) => sum + item.quantity * item.product.price, 0)
    .toFixed(2);
  return (
    <div>
      <h3>
        Subtotal ({totalItem} item{totalItem !== 1 && 's'}): ${totalCost}
      </h3>
    </div>
  );
};

export default SubTotal;
