import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Pineapple from "../2093297.png";

// MUI stuff
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/styles";
import ShoppingCart from "@material-ui/icons/ShoppingCart";

const styles = theme => ({
  ...theme.spreadThis,
  cartPic: {
    margin: "0 5px 0 5px"
  },

  root: {
    flexGrow: 1
  },

  title: {
    flexGrow: 1
  }
});

class Navbar extends Component {
  render() {
    const { classes } = this.props;

    return (
      <AppBar>
        <Toolbar>
          <Typography variant="h5" className={classes.title}>
            <img
              src={Pineapple}
              alt="logo"
              width="24px"
              height="24px"
              className={classes.cartPic}
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
        <div className=""></div>
      </AppBar>
    );
  }
}

export default withStyles(styles)(Navbar);
