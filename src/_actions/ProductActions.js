import axios from 'axios';

import { baseURL, ADD_PRODUCT, GET_PRODUCT_ITEMS, LOADING, LOADED, DELETE_PRODUCT, UPDATE_PRODUCT, TOGGLE_PRODUCT_VISIBILITY, RESET_PRODUCT } from './types';
import { handleResponseErrors } from './AlertActions';
import { getConfigHeaders } from './AuthActions';

export const getProductItems = (filter='') => dispatch => {
  dispatch({ type: LOADING});
  const url = `${ baseURL}/api/products`;
  let query = filter ? filter : '';

  axios.get(url, { params: query})
    .then(({ data }) => {
      dispatch({ 
        type: GET_PRODUCT_ITEMS,
        payload: data.data
      });
      dispatch({ type: LOADED });
    })
    .catch(e => handleResponseErrors(e, GET_PRODUCT_ITEMS));
};

export const addProduct = productData => dispatch => {
  dispatch({ type: LOADING});
  const config = getConfigHeaders();
  const url = `${ baseURL}/api/products`;
  axios.post(url, productData, config)
    .then(({ data }) => {
      dispatch({ 
        type: ADD_PRODUCT,
        payload: data.data
      });
      dispatch({ type: LOADED });
    })
    .catch(e => handleResponseErrors(e, ADD_PRODUCT));
};

export const updateProductById = (productId, productData) => dispatch => {
  dispatch({ type: LOADING});
  const config = getConfigHeaders();
  const url = `${ baseURL}/api/products/${productId}`;

  axios.put(url, productData, config)
    .then(({ data }) => {
      dispatch({ 
        type: UPDATE_PRODUCT,
        payload: data.data
      });
      dispatch({ type: LOADED });
    })
    .catch(e => handleResponseErrors(e, UPDATE_PRODUCT));
};

export const toggleProductVisibility = (productId) => dispatch => {
  dispatch({ type: LOADING});
  const config = getConfigHeaders();
  const url = `${ baseURL}/api/products/${productId}/visibility`;

  axios.put(url, {},  config)
    .then(({ data }) => {
      dispatch({ 
        type: TOGGLE_PRODUCT_VISIBILITY,
        payload: data.data
      });
      dispatch({ type: LOADED });
    })
    .catch(e => handleResponseErrors(e, TOGGLE_PRODUCT_VISIBILITY));
};

export const resetProduct = () => dispatch => {
  dispatch({ type: RESET_PRODUCT })
};

export const deleteProductById = productId => dispatch => {
  dispatch({ type: LOADING});
  const config = getConfigHeaders();
  const url = `${ baseURL}/api/products/${productId}`;

  axios.delete(url, config)
    .then(({ data }) => {
      dispatch({ 
        type: DELETE_PRODUCT,
        payload: data.data
      });
      dispatch({ type: LOADED });
    })
    .catch(e => handleResponseErrors(e, DELETE_PRODUCT));
};