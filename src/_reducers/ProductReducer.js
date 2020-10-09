import {ADD_PRODUCT, TOGGLE_PRODUCT_VISIBILITY, GET_PRODUCT_ITEMS, DELETE_PRODUCT, UPDATE_PRODUCT, RESET_PRODUCT } from "../_actions/types";

const initialState = {
  productItems: [],
  newProduct: null,
  productDeleted: null,
  productUpdated: null,
  productVisibility: null
};

export default (state=initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_PRODUCT:
      return {
        ...state,
        newProduct: payload
      };
    case GET_PRODUCT_ITEMS:
      return {
        ...state,
        productItems: payload
      };
    case UPDATE_PRODUCT:
      return {
        ...state,
        productUpdated: payload
      };
    case TOGGLE_PRODUCT_VISIBILITY:
      return {
        ...state,
        productVisibilitygit : payload
      };
    case RESET_PRODUCT:
      return {
        ...state,
        productUpdated: null,
        newProduct: null
      };
    case DELETE_PRODUCT:
      return {
        ...state,
        productDeleted: payload
      };
  
    default:
      return state;
  }
};