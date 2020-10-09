import {
  ADD_CART,
  REMOVE_FROM_CART,
  UPDATE_CART,
  CLEAR_CART,
  UPDATE_PRODUCT_QUANTITY
} from './types';

export const addProductToCart = product => (dispatch, getState) => {

  const existingCartItems = getState().cart.items;

  const foundItemInCart = existingCartItems.find(item => item._id === product._id);

  if (!foundItemInCart) {
    // Item is a new one
    dispatch({
      type: ADD_CART,
      payload: product
    })
  } else {
    
    const updatedCartItems = existingCartItems.map(item => {
      if (item._id === foundItemInCart._id) {
        item.quantity = parseInt(item.quantity) + 1;
      }
      return item;
    });
    
    dispatch({
      type: UPDATE_CART,
      payload: updatedCartItems
    })
  }
};

export const removeItemFromCart = itemId => dispatch => {
  dispatch({
    type: REMOVE_FROM_CART,
    payload: itemId
  })
}

export const updateProductQuantity = (productId, newQuantity) => (dispatch, getState) => {
  const existingCartItems = getState().cart.items;
  const updatedCartItems = existingCartItems.map(cartItem => {
    if (cartItem._id === productId) {
      cartItem.quantity = parseInt(newQuantity);
    }
    return cartItem;
  });

  dispatch({ 
    type: UPDATE_PRODUCT_QUANTITY,
    payload: updatedCartItems
  })


};
export const clearCart = () => dispatch => {
  dispatch({
    type: CLEAR_CART
  })
}