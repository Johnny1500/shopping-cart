import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import PropTypes from "prop-types";

// MUI Stuff
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardHeader from "@material-ui/core/CardHeader";
import Typography from "@material-ui/core/Typography";
import Fab from "@material-ui/core/Fab";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

const styles = theme => ({
  ...theme.spreadThis,
  card: {
    position: "relative",
    display: "flex",
    marginBottom: 20,
    maxWidth: 500,
    minWidth: 150,
    minHeight: 550,
    flexDirection: "column"
  },
  image: {
    minWidth: 200,
    minHeight: 200
  },
  content: {
    padding: 25,
    objectFit: "cover",
    maxWidth: 700,
    flexGrow: 1
  },
  fab: {
    margin: theme.spacing(1)
  },
  price: {
    margin: "15 10 0 10"
  }
});

class Product extends Component {
  render() {
    const {
      classes,
      product: { name, description, imageUrl, price }
    } = this.props;

    return (
      <Card className={classes.card}>
        <CardHeader title={name} titleTypographyProps={{ variant: "h6" }} />
        <CardMedia
          image={imageUrl}
          title="Product image"
          className={classes.image}
        />
        <CardContent className={classes.content}>
          {/* <Typography variant="h5">{name}</Typography> */}
          <Typography variant="body1">{description}</Typography>
          <Typography variant="h5" className={classes.price}>
            {price}
          </Typography>
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
    );
  }
}

Product.propTypes = {
  product: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Product);
