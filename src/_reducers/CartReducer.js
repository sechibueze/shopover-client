import {
  ADD_CART,
  REMOVE_FROM_CART,
  UPDATE_CART,
  CLEAR_CART,
  UPDATE_PRODUCT_QUANTITY
} from '../_actions/types';

const initialState = {
  items: []
}

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case ADD_CART:
      return {
        ...state,
        items: [payload, ...state.items]
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        items: state.items.filter(item => item._id !== payload)
      };
    case UPDATE_CART:
    case UPDATE_PRODUCT_QUANTITY:
      return {
        ...state,
        items: payload
      };
    case CLEAR_CART:
      return {
        ...state,
        items: []
      }
    default:
      return state;
  }
}