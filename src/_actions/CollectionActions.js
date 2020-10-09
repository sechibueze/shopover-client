import axios from 'axios';

import { 
  CREATE_COLLECTION,
  EDIT_COLLECTION,
  RESET_COLLECTION,
  DELETE_COLLECTION,
  LOADED,
  baseURL,
  GET_COLLECTIONS
} from './types';
import { handleResponseErrors } from './AlertActions';
import { getConfigHeaders } from './AuthActions';

export const createCollection = collectionData => dispatch => {
  dispatch({ type: LOADED});
  const config = getConfigHeaders();
  const url = `${ baseURL }/api/collections`;

  axios.post(url, collectionData, config)
    .then(({ data }) => {
      dispatch({
        type: CREATE_COLLECTION,
        payload: data.data
      });

      dispatch({ type: LOADED })
    })
    .catch(e => handleResponseErrors(e, CREATE_COLLECTION))
};
export const updateCollectionById = (collectionId, collectionData) => dispatch => {
  dispatch({ type: LOADED});
  const config = getConfigHeaders();
  const url = `${ baseURL }/api/collections/${ collectionId }`;
  axios.put(url, collectionData, config)
    .then(({ data }) => {
      dispatch({
        type: EDIT_COLLECTION,
        payload: data.data
      });

      dispatch({ type: LOADED })
    })
    .catch(e => handleResponseErrors(e, EDIT_COLLECTION))
};

export const getCollections = () => dispatch => {
  dispatch({ type: LOADED});
  const config = getConfigHeaders();
  const url = `${ baseURL }/api/collections`;

  axios.get(url,  config)
    .then(({ data }) => {
      dispatch({
        type: GET_COLLECTIONS,
        payload: data.data
      });

      dispatch({ type: LOADED })
    })
    .catch(e => handleResponseErrors(e, GET_COLLECTIONS))
};

export const resetCollection = () => dispatch => {
  dispatch({type: RESET_COLLECTION});
};
export const deleteCollectionById = collectionId => dispatch => {
  dispatch({ type: LOADED});
  const config = getConfigHeaders();
  const url = `${ baseURL }/api/collections/${ collectionId}`;
  console.log('col ', collectionId)

  axios.delete(url,  config)
    .then(({ data }) => {
      dispatch({
        type: DELETE_COLLECTION,
        payload: data.data
      });

      dispatch({ type: LOADED })
    })
    .catch(e => handleResponseErrors(e, DELETE_COLLECTION))
};