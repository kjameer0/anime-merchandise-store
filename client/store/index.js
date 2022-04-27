import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import auth from './auth';
import allProductsReducer from './allProducts';
import singleProductReducer from './singleProduct';
import cartReducer from './cart';
import singleOrderReducer from './singleOrder';
import allOrderReducer from './allOrders';
const reducer = combineReducers({
  auth,
  products: allProductsReducer,
  product: singleProductReducer,
  cart: cartReducer,
  order: singleOrderReducer,
  allOrders: allOrderReducer,
});
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
);
const store = createStore(reducer, middleware);

export default store;
export * from './auth';
