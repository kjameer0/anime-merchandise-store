import React from "react";
import { connect } from "react-redux";
import { authenticate } from "../store";
import { Button, Form, TextField, InputLabel, FormControl, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

/**
 * COMPONENT
 */

const useStyles = makeStyles(theme => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const AuthForm = props => {
  const classes = useStyles();
  const { name, displayName, handleSubmit, error } = props;

  return (
    <div>
      <form onSubmit={handleSubmit} name={name} className={classes.root}>
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
            <TextField label="password" variant="outlined" name="password" />
          </FormControl>
        </div>
        <div>
          <Button type="submit" variant="contained" color="primary">
            {displayName}
          </Button>
        </div>
      </form>
      {error && error.response && <div> {error.response.data} </div>}
    </div>
  );
};

const OldAuthForm = props => {
  const { name, displayName, handleSubmit, error } = props;

  return (
    <div>
      <form onSubmit={handleSubmit} name={name}>
        <h2 className="form-title">{name === "login" ? "Login" : "Sign up"}</h2>
        <div className="form-control">
          <label htmlFor="username">
            <small>Username</small>
          </label>
          <input name="username" type="text" />
        </div>
        {name === "signup" && (
          <div className="form-control">
            <label htmlFor="email">Email</label>
            <input type="text" name="email" />
          </div>
        )}
        <div className="form-control">
          <label htmlFor="password">
            <small>Password</small>
          </label>
          <input name="password" type="password" />
        </div>
        <div className="form-control">
          <button type="submit">{displayName}</button>
        </div>
        {error && error.response && <div> {error.response.data} </div>}
      </form>
    </div>
  );
};

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
      const email = formName === "signup" ? evt.target.email.value : "dummy@gmail.com";
      dispatch(authenticate(username, password, email, formName));
    },
  };
};

export const Login = connect(mapLogin, mapDispatch)(AuthForm);
export const Signup = connect(mapSignup, mapDispatch)(AuthForm);
