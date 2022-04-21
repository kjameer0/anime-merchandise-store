import React, { Component } from 'react';

const DELETE = 'DELETE';
const MORE_OPTIONS = 'MORE';

export default class SelectQuantity extends Component {
  constructor(props) {
    super(props);
    this.state = { hasOption: true };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    switch (event.target.value) {
      case DELETE:
        this.props.OnDelete();
        break;
      case MORE_OPTIONS:
        this.setState({ hasOption: false });
        break;
      default:
        this.props.onChange(event.target.value);
        break;
    }
  }
  render() {
    const quantityList = Array.from({ length: 9 }, (_, i) => i + 1);
    const { quantity, onDelete } = this.props;
    return this.state.hasOption ? (
      <select defaultValue={quantity} onChange={this.handleChange}>
        {onDelete !== undefined ? (
          <option value={DELETE}>0(delete)</option>
        ) : (
          <></>
        )}
        {quantityList.map((number) => (
          <option value={number} key={number}>
            qty: {number}
          </option>
        ))}
        <option value={MORE_OPTIONS}>10+</option>
      </select>
    ) : (
      <input
        type="number"
        name="quantity"
        min="1"
        max="100"
        onChange={this.handleChange}
      />
    );
  }
}
