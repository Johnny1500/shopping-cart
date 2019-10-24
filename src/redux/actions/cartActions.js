import {
  LOADING_DATA,
  SET_PRODUCTS,
  SET_CART_ITEM,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
  REMOVE_ITEM_FROM_CART
} from "../types";

import axios from "axios";

// export const getProducts = () => dispatch => {
//   dispatch({ type: LOADING_DATA });
//   axios
//     .get(
//       "http://us-central1-shopping-cart-aa4b0.cloudfunctions.net/api/products/"
//     )
//     .then(res => {
//       dispatch({ type: SET_PRODUCTS, payload: res.data });
//     })
//     .catch(err => {
//       dispatch({ type: SET_PRODUCTS, payload: [] });
//       console.error(err);
//     });
// };

// Get all products from Cloud Firestore
export const getProducts = () => async dispatch => {
  try {
    dispatch({ type: LOADING_DATA });

    let res = await axios.get(
      "http://us-central1-shopping-cart-aa4b0.cloudfunctions.net/api/products/"
    );

    await dispatch({ type: SET_PRODUCTS, payload: res.data });
  } catch (err) {
    dispatch({ type: SET_PRODUCTS, payload: [] });
    console.error(err);
  }
};

// Set cart item action
export const setCartItem = id => dispatch =>
  dispatch({
    type: SET_CART_ITEM,
    id
  });

// Set cart item action
export const removeProduct = id => dispatch =>
  dispatch({
    type: REMOVE_ITEM_FROM_CART,
    id
  });

// Set cart item action
export const increaseQuantity = id => dispatch =>
  dispatch({
    type: INCREASE_QUANTITY,
    id
  });

// Set cart item action
export const decreaseQuantity = id => dispatch =>
  dispatch({
    type: DECREASE_QUANTITY,
    id
  });
