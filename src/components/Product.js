// React stuff
import React, { Component } from "react";
import PropTypes from "prop-types";

// Redux stuff
import { connect } from "react-redux";
import { setCartItem } from "../redux/actions/cartActions";

// MUI stuff
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardHeader from "@material-ui/core/CardHeader";
import Typography from "@material-ui/core/Typography";
import Fab from "@material-ui/core/Fab";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = theme => ({
  ...theme.spreadThis,

  price: {
    marginRight: "10px"
  }
});

class Product extends Component {
  handleClick = id => {
    this.props.setCartItem(id);
  };

  render() {
    const {
      classes,
      product: { id, name, description, imageUrl, price }
    } = this.props;

    return (
      <Card className={classes.card}>
        <CardHeader title={name} titleTypographyProps={{ variant: "h6" }} />
        <CardMedia image={imageUrl} className={classes.cardImage} />
        <CardContent className={classes.cardContent}>
          <Typography variant="body1">{description}</Typography>
          <Typography variant="h5" className={classes.price}>
            Price: {price}$
          </Typography>
        </CardContent>
        <Fab
          size="small"
          color="secondary"
          aria-label="add"
          className={classes.fab}
          onClick={this.handleClick(id)}
        >
          <AddShoppingCartIcon />
        </Fab>
      </Card>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.loading,
  products: state.products
});

Product.propTypes = {
  product: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired
};

export default connect(
  mapStateToProps,
  { setCartItem }
)(withStyles(styles)(Product));
