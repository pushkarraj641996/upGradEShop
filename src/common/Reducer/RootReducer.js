import { combineReducers } from "redux";

import UserAuthenticationReducer from "./UserAuthenticationReducer";
import CartItemsReducer from "./CartItemsReducer";

export default combineReducers({
  userAuth: UserAuthenticationReducer,
  cart: CartItemsReducer,
});
