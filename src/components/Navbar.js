import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import Pineapple from "../Pineapple.png";

// MUI stuff
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/styles";
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import MenuIcon from "@material-ui/icons/Menu";

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
  },

  "@media screen and (max-width: 768px)": {
    largeScreenSize: {
      display: "none"
    }
  },

  "@media screen and (min-width: 768px)": {
    smallScreenSize: {
      display: "none"
    }
  }
});

class Navbar extends Component {
  render() {
    const { classes } = this.props;

    return (
      <AppBar style={{ position: "relative" }}>
        <Toolbar>
          <Typography
            variant="h5"
            className={`${classes.title} ${classes.largeScreenSize}`}
          >
            <img
              src={Pineapple}
              alt="logo"
              width="24px"
              height="24px"
              className={classes.cartPic}
            />
            Pineapple Pi single-board computers
          </Typography>
          <Typography
            variant="h6"
            className={`${classes.title} ${classes.smallScreenSize}`}
          >
            <img
              src={Pineapple}
              alt="logo"
              width="24px"
              height="24px"
              className={classes.cartPic}
            />
            Pineapple Pi
          </Typography>
          <Fragment>
            <Button
              color="inherit"
              className={classes.largeScreenSize}
              component={Link}
              to="/"
            >
              Shop
            </Button>
            <Button
              color="inherit"
              className={classes.largeScreenSize}
              component={Link}
              to="/cart"
            >
              Cart
              <ShoppingCart className={classes.cartPic} />
            </Button>
          </Fragment>
          <MenuIcon className={classes.smallScreenSize} />
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles)(Navbar);
