// the root -reducer is a base reducer object that represents all the state of our app and will be the code that actually combines all the other states together
// we are going to break the code up into individuals sections - user reducer, etc,... and combine back into one using redux - combineReducer


import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';

export default combineReducers({
  user: userReducer,
  cart: cartReducer
});
