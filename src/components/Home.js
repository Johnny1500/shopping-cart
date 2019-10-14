import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import Product from "./Product";

// Redux stuff
import { connect } from "react-redux";
import { getProducts } from "../redux/actions/cartActions";

// MUI Stuff
import Grid from "@material-ui/core/Grid";

class Home extends Component {
  componentDidMount() {
    this.props.getProducts();
  }

  render() {
    const { loading, products } = this.props;
    console.log(loading, products);

    let productsMarkup = !loading ? (
      products.map(product => (
        <Grid item sm={2} xs={6}>
          <Product key={product.id} product={product} />
        </Grid>
      ))
    ) : (
      <div>
        <p>Loading...</p>
      </div>
    );

    return (
      <Grid
        style={{ marginTop: "5px" }}
        container
        spacing={2}
        direction="row"
        justify="center"
      >
        {productsMarkup}
      </Grid>
    );
  }
}

Home.propTypes = {
  getProducts: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  products: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  loading: state.loading,
  products: state.products
});

export default connect(
  mapStateToProps,
  { getProducts }
)(Home);
