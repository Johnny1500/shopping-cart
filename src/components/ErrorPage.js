import React, { Component } from "react";
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
    minHeight: 550,
    minWidth: 550,
    flexDirection: "column"
  },
  content: {
    position: "relative",
    marginBottom: 25
  }
});

class ErrorPage extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.container}>
        <Typography variant="h3" className={classes.content}>
          404 Page not found
        </Typography>
        <Button
          variant="contained"
          color="primary"
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
