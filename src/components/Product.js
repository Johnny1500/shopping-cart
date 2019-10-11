import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import PropTypes from "prop-types";

// MUI Stuff
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

const styles = theme => ({
  ...theme.spreadThis,
  card: {
    position: "relative",
    display: "flex",
    marginBottom: 20,
    maxWidth: 1000
  },
  image: {
    minWidth: 200,
    minHeight: 120
  },
  content: {
    padding: 25,
    objectFit: "cover",
    maxWidth: 700,
    flexGrow: 1
  },
  fab: {
    margin: theme.spacing(1)
  }
});

class Product extends Component {
  render() {
    const {
      classes,
      product: { name, description, imageUrl }
    } = this.props;

    return (
      <Card className={classes.card}>
        <CardMedia
          image={imageUrl}
          title="Product image"
          className={classes.image}
        />
        <CardContent className={classes.content}>
          <Typography variant="h5">{name}</Typography>
          <Typography variant="body1">{description}</Typography>
        </CardContent>
        <Fab size="small" color="primary" aria-label="add" className={classes.fab}>
          <AddShoppingCartIcon />
        </Fab>
      </Card>
    );
  }
}

Product.propTypes = {
  product: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Product);
