// React stuff
import React, { Component } from "react";
import PropTypes from "prop-types";
import Product from "../components/Product";
import ProductSkeleton from "../components/ProductSkeleton";

// Redux stuff
import { connect } from "react-redux";
import { getProducts } from "../redux/actions/cartActions";

// MUI stuff
import Grid from "@material-ui/core/Grid";

// Home (Shop) page
class Home extends Component {
  componentDidMount() {
    this.props.getProducts();
  }

  render() {
    const { loading, products } = this.props;

    let productsMarkup = !loading ? (
      products.map(product => (
        <Grid item sm={2} xs={6} style={{ minWidth: 300 }}>
          <Product key={product.id} product={product} />
        </Grid>
      ))
    ) : (
      <ProductSkeleton />
    );

    return (
      <Grid
        style={{ marginTop: "20px" }}
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
