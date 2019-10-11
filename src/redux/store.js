import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import cartReducer from "./reducers/cartReducer";

const initialState = {
  products: [],
  loading: false
};

const middleware = [thunk];

const store = createStore(
  cartReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
