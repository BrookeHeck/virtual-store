import { combineReducers } from 'redux';
import cart from './cart';
import categories from './categories';
import products from './products';

const rootReducer = combineReducers({
  cart,
  categories,
  products,
});

export default rootReducer;

