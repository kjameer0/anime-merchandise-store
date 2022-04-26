import React, { Component } from "react";
import { connect } from "react-redux";
const DELETE = "DELETE";
const MORE_OPTIONS = "MORE";

class SelectQuantity extends Component {
  constructor(props) {
    super(props);
    this.state = { hasOption: true, quantity: 0 };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidUpdate(prev) {
    if (prev.quantity !== this.props.quantity) {
      this.setState({ quantity: this.props.quantity });
    }
  }
  handleChange(event) {
    switch (event.target.value) {
      case DELETE:
        this.props.onDelete();
        break;
      case MORE_OPTIONS:
        this.setState({ hasOption: false });
        break;
      default:
        this.props.onChange(event);
        this.setState({ quantity: this.props.quantity });
        break;
    }
  }
  render() {
    const quantityList = Array.from({ length: 9 }, (_, i) => i + 1);
    const { quantity, onDelete } = this.props;
    console.log(quantity);
    return this.state.hasOption ? (
      <select
        defaultValue={quantity ? (quantity >= 10 ? MORE_OPTIONS : quantity) : 1}
        onChange={this.handleChange}
      >
        {onDelete !== undefined ? (
          <option value={DELETE}>0 (delete)</option>
        ) : (
          <React.Fragment></React.Fragment>
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
const mapState = (state) => {
  return {
    cart: state.cart,
  };
};
export default connect(mapState)(SelectQuantity);
