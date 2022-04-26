import React, { Component } from "react";
import { connect } from "react-redux";
import { Select, InputLabel, FormControl } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const DELETE = "DELETE";
const MORE_OPTIONS = "MORE";

const styles = theme => ({
  options: {
    cursor: "pointer",
  },
});

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
    const { quantity, onDelete, classes } = this.props;
    return this.state.hasOption ? (
      <FormControl>
        <InputLabel shrink>Quantity</InputLabel>
        <Select defaultValue={quantity ? (quantity >= 10 ? MORE_OPTIONS : quantity) : 1} onChange={this.handleChange}>
          {onDelete !== undefined ? <option value={DELETE}>0 (delete)</option> : <React.Fragment></React.Fragment>}
          {quantityList.map(number => (
            <option value={number} key={number} className={classes.options}>
              {number}
            </option>
          ))}
          <option value={MORE_OPTIONS} className={classes.options}>
            10+
          </option>
        </Select>
      </FormControl>
    ) : (
      <input type="number" name="quantity" min="1" max="100" onChange={this.handleChange} />
    );
  }
}
const mapState = state => {
  return {
    cart: state.cart,
  };
};
export default connect(mapState)(withStyles(styles)(SelectQuantity));
