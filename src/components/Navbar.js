// React stuff
import React, { Component } from "react";
import Pineapple from "../Pineapple.png";
import GroupOfButtons from "./GroupOfButtons";

// MUI stuff
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/styles";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";

const styles = theme => ({
  ...theme.spreadThis,
  picture: {
    margin: "0 5px 0 5px"
  },

  root: {
    flexGrow: 1
  },

  title: {
    flexGrow: 1
  },

  menu: {
    display: "flex",
    flexDirection: "column"
  },

  paper: {
    backgroundColor: "#827717",
    color: "#fff"
  },

  "@media screen and (max-width: 700px), handheld": {
    largeScreenSize: {
      display: "none"
    }
  },

  "@media screen and (min-width: 700px), handheld": {
    smallScreenSize: {
      display: "none"
    }
  }
});

class Navbar extends Component {
  state = {
    anchorEl: null
  };

  handleClickMenu = event => {
    let el = event.currentTarget;
    this.state.anchorEl
      ? this.setState({ anchorEl: null })
      : this.setState({ anchorEl: el });
  };

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
              className={classes.picture}
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
              className={classes.picture}
            />
            Pineapple Pi
          </Typography>
          <GroupOfButtons
            sizeClassName={classes.largeScreenSize}
            pictureClassName={classes.picture}
          />

          <IconButton
            aria-label="more"
            aria-controls="long-menu"
            aria-haspopup="true"
            onClick={this.handleClickMenu}
            color="inherit"
            className={classes.smallScreenSize}
          >
            <MenuIcon />
          </IconButton>

          <Popper
            anchorEl={this.state.anchorEl}
            open={Boolean(this.state.anchorEl)}
            placement="left"
            transition
            disablePortal
          >
            <Paper className={classes.paper}>
              <GroupOfButtons
                sizeClassName={classes.smallScreenSize}
                pictureClassName={classes.picture}
                menu={classes.menu}
              />
            </Paper>
          </Popper>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles)(Navbar);
