import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import CartReducer from './CartReducer';
import AlertReducer from './AlertReducer';
import ProductReducer from './ProductReducer';
import CollectionReducer from './CollectionReducer';
import PaymentReducer from './PaymentReducer';
export default combineReducers({
  auth: AuthReducer,
  cart: CartReducer,
  alerts: AlertReducer,
  products: ProductReducer,
  collections: CollectionReducer,
  payments: PaymentReducer,
});