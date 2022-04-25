import React, { Component } from 'react';
const SubTotal = (props) => {
  const totalItem = getItemTotal(props.items);
  const totalCost = getCostTotal(props.items);
  return (
    <div>
      <h3>
        Subtotal ({totalItem} item{totalItem !== 1 && 's'}): ${totalCost}
      </h3>
    </div>
  );
};

export const getItemTotal = (itemList) =>
  itemList.reduce((sum, item) => sum + item.quantity, 0);
export const getCostTotal = (itemList) =>
  itemList
    .reduce((sum, item) => sum + item.quantity * item.product.price, 0)
    .toFixed(2);
export default SubTotal;
