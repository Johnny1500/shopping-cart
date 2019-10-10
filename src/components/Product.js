import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import PropTypes from "prop-types";

// MUI Stuff
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  ...theme.spreadThis,
  card: {
    position: "relative",
    display: "flex",
    marginBottom: 20
  },
  image: {
    minWidth: 200
  },
  content: {
    padding: 25,
    objectFit: "cover"
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
        <CardContent>
          <Typography variant="h3">{name}</Typography>
          <Typography variant="body1">{description}</Typography>
        </CardContent>
      </Card>
    );
  }
}

Product.propTypes = {
  product: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Product);
