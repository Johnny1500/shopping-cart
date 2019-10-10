import { LOADING_DATA, SET_PRODUCTS } from "../types";

const initialState = {
  products: [],
  loading: false
};

const cartReducer = function(state = initialState, action) {
  switch (action.type) {
    case LOADING_DATA:
      return {
        ...state,
        loading: true
      };
    case SET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        loading: false
      };
    default:
      return state;
  }
};

export default cartReducer;
