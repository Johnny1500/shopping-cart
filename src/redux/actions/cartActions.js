import { LOADING_DATA, SET_PRODUCTS } from "../types";

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
