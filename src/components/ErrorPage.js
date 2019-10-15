import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

// MUI stuff
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = theme => ({
  ...theme.spreadThis,
  container: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 100,
    maxHeight: 500,
    maxWidth: 500,
    flexDirection: "column",
    top: "50%",
    left: "30%"
  },
  content: {
    position: "relative",
    marginBottom: 10
  }
});

class ErrorPage extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.container}>
        <Typography variant="h4" className={classes.content}>
          404 Page not found
        </Typography>
        <Button
          color="inherit"
          className={classes.content}
          component={Link}
          to="/"
        >
          Return to shop
        </Button>
      </div>
    );
  }
}

export default withStyles(styles)(ErrorPage);
