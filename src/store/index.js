import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'thunk';
import cart from './cart';
import categories from './categories';
import products from './products';

const rootReducer = combineReducers({
  cart,
  categories,
  products,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

