import { createStore, combineReducers, applyMiddleware } from 'redux';
import readAll from '../middleware/read';
import thunk from 'redux-thunk';
import cart from './cart';
import categories from './categories';
import products from './products';

const rootReducer = combineReducers({
  cart,
  categories,
  products,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

store.dispatch(readAll('products'));
store.dispatch(readAll('categories'));

export default store;

