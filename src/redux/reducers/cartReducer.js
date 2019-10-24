import {
  LOADING_DATA,
  SET_PRODUCTS,
  SET_CART_ITEM,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
  REMOVE_ITEM_FROM_CART
} from "../types";

export default function(state, action) {
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
    case SET_CART_ITEM:
      let cartItem = state.products.find(product => product.id === action.id);

      //Check if the action id exists in the addedItems
      let existedItem = state.cartItems.find(item => item.id === action.id);

      if (existedItem) {
        cartItem.quantity += 1;
        return {
          ...state,
          total: state.total + cartItem.price
        };
      } else {
        cartItem.quantity = 1;
        // Calculating the total
        let newTotal = state.total + cartItem.price;
        return {
          ...state,
          cartItems: [...state.cartItems, cartItem],
          total: newTotal
        };
      }

    default:
      return state;
  }
}
