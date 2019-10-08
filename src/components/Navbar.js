import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

// MUI stuff
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/styles";
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const styles = {
  cartPic: {
    margin: "5px"
  },

  root: {
    flexGrow: 1
  },

  title: {
    flexGrow: 1
  }
};

class Navbar extends Component {
  render() {
    const { classes } = this.props;

    return (
      <AppBar>
        <Toolbar>
          <Typography variant="h5" className={classes.title}>
            <img
              src="../pineapple-pi-128.png"
              alt="logo"
              width="24px"
              height="24px"
            />
            <img
              src="../2.png"
              alt="logo"
              
            />
            Pineapple Pi
          </Typography>
          <Button color="inherit" component={Link} to="/">
            Shop
          </Button>
          <Button color="inherit" component={Link} to="/cart">
            Cart
            <ShoppingCart className={classes.cartPic} />
          </Button>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles)(Navbar);
