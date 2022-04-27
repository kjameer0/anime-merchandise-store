import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../store';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Menu,
  MenuItem,
  ListItemIcon,
} from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AssignmentIcon from '@material-ui/icons/Assignment';

const useStyles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  logo: {
    flexGrow: 1,
    fontSize: '25px'
  },
  navbarNav: {},
  navButton: {
    fontSize: '20px',
    '&:hover' : {
      background: 'green',
      border: '1px solid black'
    },
    border: '1px solid clear',
    padding: '25px'
  },
  cartInfo: {
    position: 'absolute',
    background: 'rgba(220, 220, 220, .5)',
    borderRadius: '50%',
    width: '20px',
    height: '20px',
    textAlign: 'center',
    display: 'inline-block',
    marginLeft: '3rem',
    marginBottom: '1.5rem',
    fontSize: '1rem',
  },
});

class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      anchorEl: null,
    };
    this.handleClose = this.handleClose.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
  }
  handleOpen(e) {
    this.setState({
      anchorEl: e.currentTarget,
    });
  }

  handleClose(e) {
    this.setState({
      anchorEl: null,
    });
  }

  render() {
    const { handleClick, isLoggedIn, cart, classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <div className={classes.logo}>
              <h5>Weeb Mart</h5>
            </div>
            <div className={classes.navbarNav}>
              <Button color="inherit" className={classes.navButton} component={Link} to="/products">
                Products
              </Button>
              <IconButton color="inherit" className={classes.navButton} component={Link} to="/cart">
                {cart.length > 0 && (
                  <span className={classes.cartInfo}>{cart.length}</span>
                )}
                <ShoppingCartIcon />
              </IconButton>
              {!isLoggedIn && (
                <>
                  <Button color="inherit" className={classes.navButton} component={Link} to="/login">
                    Login
                  </Button>

                  <Button color="inherit" className={classes.navButton} to="/signup" component={Link}>
                    Sign up
                  </Button>
                </>
              )}
              {isLoggedIn && (
                <>
                  <Menu
                    keepMounted
                    open={Boolean(this.state.anchorEl)}
                    onClose={this.handleClose}
                    anchorEl={this.state.anchorEl}
                  >
                    <MenuItem
                      component={Link}
                      to="/home"
                      onClick={this.handleClose}
                    >
                      <ListItemIcon>
                        <AccountCircleIcon />
                      </ListItemIcon>
                      My Profile
                    </MenuItem>
                    <MenuItem
                      component={Link}
                      to="/orders"
                      onClick={this.handleClose}
                    >
                      <ListItemIcon>
                        <AssignmentIcon />
                      </ListItemIcon>
                      My Orders
                    </MenuItem>
                  </Menu>
                  <IconButton color="inherit" onClick={this.handleOpen}>
                    <AccountCircleIcon />
                  </IconButton>
                  <Button color="inherit" onClick={handleClick}>
                    Logout
                  </Button>
                </>
              )}
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    isLoggedIn: !!state.auth.id,
    cart: state.cart,
  };
};

const mapDispatch = (dispatch) => {
  return {
    handleClick() {
      dispatch(logout());
    },
  };
};

export default connect(mapState, mapDispatch)(withStyles(useStyles)(Navbar));
