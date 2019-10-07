import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

// MUI stuff
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { withStyles } from "@material-ui/styles";

const styles = {
  textnotr: {
    textTransform: "none"
  }
};

class Navbar extends Component {
  render() {
    const { classes } = this.props;

    return (
      <AppBar>
        <Toolbar>
          <Fragment>
            <Button
              color="inherit"
              className={classes.textnotr}
              component={Link}
              to="/"
            >
              Shop
            </Button>
            <Button
              color="inherit"
              className={classes.textnotr}
              component={Link}
              to="/cart"
            >
              
              Cart
              <AddShoppingCartIcon />
            </Button>
          </Fragment>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles)(Navbar);
