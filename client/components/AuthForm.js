import React, { Component } from "react";
import { connect } from "react-redux";
import { authenticate } from "../store";
import { Button, Form, TextField, InputLabel, FormControl, Typography, Snackbar, Alert } from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

/**
 * COMPONENT
 */

const useStyles = theme => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  span: {
    display: "inline-block",
    margin: theme.spacing(1),
    fontSize: "12px",
  },
});

class AuthForm extends Component {
  //const classes = useStyles();
  //const { name, displayName, handleSubmit, error } = props;

  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleSubmit(evt) {
    evt.preventDefault();
    const formName = evt.target.name;
    const username = evt.target.username.value;
    const password = evt.target.password.value;
    const re_password = evt.target.confirmPassword;
    if (formName === "signup" && re_password && password !== re_password.value) {
      this.setState({
        open: true,
      });
      return;
    }
    const email = formName === "signup" ? evt.target.email.value : "dummy@gmail.com";
    this.props.authenticate(username, password, email, formName);
  }

  handleClose() {
    this.setState({
      open: false,
    });
  }

  render() {
    const { classes, name, displayName, error } = this.props;

    return (
      <div>
        <form onSubmit={this.handleSubmit} name={name} className={classes.root}>
          <div>
            <h3>{displayName}</h3>
            <FormControl>
              <TextField label="Username" variant="outlined" name="username" />
            </FormControl>
          </div>
          {name === "signup" && (
            <div>
              <FormControl>
                <TextField label="email" variant="outlined" name="email" />
              </FormControl>
            </div>
          )}
          <div>
            <FormControl>
              <TextField label="password" variant="outlined" name="password" type="password" />
            </FormControl>
          </div>
          {name === "signup" && (
            <div>
              <FormControl>
                <TextField label="Confirm Password" variant="outlined" name="confirmPassword" type="password" />
              </FormControl>
            </div>
          )}
          <div>
            <Button type="submit" variant="contained" color="primary">
              {displayName}
            </Button>
          </div>
          <div>
            {name === "signup" ? (
              <span className={classes.span}>
                Already have an account? <Link to="/login">Log in</Link>
              </span>
            ) : (
              <span className={classes.span}>
                Don't have an account?
                <Link to="/signup">Sign up</Link>
              </span>
            )}
          </div>
        </form>
        {error && error.response && <div> {error.response.data} </div>}
        <Snackbar
          open={this.state.open}
          autoHideDuration={5000}
          onClose={this.handleClose}
          message="Passwords don't match"
        ></Snackbar>
      </div>
    );
  }
}

/**
 * CONTAINER
 *   Note that we have two different sets of 'mapStateToProps' functions -
 *   one for Login, and one for Signup. However, they share the same 'mapDispatchToProps'
 *   function, and share the same Component. This is a good example of how we
 *   can stay DRY with interfaces that are very similar to each other!
 */
const mapLogin = state => {
  return {
    name: "login",
    displayName: "Login",
    error: state.auth.error,
  };
};

const mapSignup = state => {
  return {
    name: "signup",
    displayName: "Sign Up",
    error: state.auth.error,
  };
};

const mapDispatch = dispatch => {
  return {
    handleSubmit(evt) {
      evt.preventDefault();
      const formName = evt.target.name;
      const username = evt.target.username.value;
      const password = evt.target.password.value;
      const re_password = evt.target.confirmPassword;
      if (re_password && password !== re_password.value) {
        alert("Passwords do not match");
        return;
      }
      const email = formName === "signup" ? evt.target.email.value : "dummy@gmail.com";
      dispatch(authenticate(username, password, email, formName));
    },
    authenticate(username, password, email, formName) {
      dispatch(authenticate(username, password, email, formName));
    },
  };
};

export const Login = connect(mapLogin, mapDispatch)(withStyles(useStyles)(AuthForm));
export const Signup = connect(mapSignup, mapDispatch)(withStyles(useStyles)(AuthForm));
