import { cartReducer } from "../reducers/cartReducer";
import { combineReducers, createStore } from "redux";
const rootReducer = combineReducers({
  cart: cartReducer,
});
export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
