// React stuff
import React from "react";
import PropTypes from "prop-types";
import NoImg from "../images/NoImage.png";

// MUI stuff
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Fab from "@material-ui/core/Fab";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

const styles = theme => ({
  ...theme.spreadThis,

  title: {
    width: "80%",
    height: 30,
    backgroundColor: "rgba(0,0,0, 0.5)",
    marginBottom: 5
  },

  fullLine: {
    height: 12,
    width: "90%",
    backgroundColor: "rgba(0,0,0, 0.5)",
    marginBottom: 10
  },
  halfLine: {
    height: 12,
    width: "50%",
    backgroundColor: "rgba(0,0,0, 0.5)",
    marginBottom: 10
  },

  price: {
    width: "40%",
    height: 28,
    backgroundColor: "rgba(0,0,0, 0.5)",
    marginRight: "10px"
  }
});

const ProductSkeleton = props => {
  const { classes } = props;

  const content = Array.from({ length: 5 }).map((item, index) => (
    <Grid item sm={2} xs={6} style={{ minWidth: 300 }}>
      <Card className={classes.card} key={index}>
        <CardContent>
          <div className={classes.title}></div>
        </CardContent>
        <CardMedia image={NoImg} className={classes.cardImage} />
        <CardContent className={classes.cardContent}>
          <div className={classes.fullLine}></div>
          <div className={classes.fullLine}></div>
          <div className={classes.halfLine}></div>
          <div className={classes.price}></div>
        </CardContent>
        <Fab
          size="small"
          color="secondary"
          aria-label="add"
          className={classes.fab}
        >
          <AddShoppingCartIcon />
        </Fab>
      </Card>
    </Grid>
  ));

  return <>{content}</>;
};

ProductSkeleton.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ProductSkeleton);
