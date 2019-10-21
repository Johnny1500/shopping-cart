import React, { Component } from "react";
import Pineapple from "../Pineapple.png";
import GroupOfButtons from "./GroupOfButtons";

// MUI stuff
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/styles";
import MenuIcon from "@material-ui/icons/Menu";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

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

  "@media screen and (max-width: 768px), handheld": {
    largeScreenSize: {
      display: "none"
    }
  },

  "@media screen and (min-width: 768px), handheld": {
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
    this.setState({ anchorEl: el });
  };

  handleCloseMenu = () => {
    this.setState({ anchorEl: null });
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
          <Button
            aria-controls="customized-menu"
            aria-haspopup="true"
            variant="contained"
            color="primary"
            onClick={this.handleClickMenu}
            className={classes.smallScreenSize}
          >
            <MenuIcon />
          </Button>
          <Menu
            anchorEl={this.state.anchorEl}
            open={Boolean(this.state.anchorEl)}
            onClose={this.handleCloseMenu}
          >
            
              <GroupOfButtons
                sizeClassName={classes.smallScreenSize}
                pictureClassName={classes.picture}
              />
            
          </Menu>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles)(Navbar);
