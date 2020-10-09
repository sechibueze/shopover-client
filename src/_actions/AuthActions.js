import axios from 'axios';
import { handleResponseErrors } from './AlertActions';
import {
  baseURL,
  REGISTER_USER,
  REGISTER_FAIL,
  LOGIN_USER,
  LOGIN_FAIL,
  AUTH_FAIL,
  SET_CURRENT_USER,
  LOAD_USERS,
  LOAD_USER_WITH_ID,
  LOGOUT,
  DELETE_USER_WITH_ID,
  DELETE_USERS,
  UPDATE_USER_ROLE,
} from './types';

export const getConfigHeaders = () => {
  const token = localStorage.getItem('token');

  const configHeaders = {
    headers: {
      'Content-Type' : 'application/json'
    }
  };

  if (token) {
    configHeaders.headers['x-access-token'] = token;
  }

  return configHeaders;
};

export const loadCurrentUser = () => dispatch => {
  const config = getConfigHeaders();
  const url = `${ baseURL }/api/users/auth`;
  
  axios.get(url, config)
    .then(({ data }) => {
      dispatch({
        type: SET_CURRENT_USER,
        payload: data.data
      });

    })
    .catch(e => {
      
      handleResponseErrors(e, AUTH_FAIL)
    });
};

export const loginUser = userData => dispatch => {
  
  const url = `${ baseURL }/api/users/auth`;
  
  axios.post(url, userData)
    .then(({ data }) => {
      const { token } = data;
      localStorage.setItem('token', token);
      dispatch(loadCurrentUser());
      
      dispatch({
        type: LOGIN_USER,
        payload: token
      });

    })
    .catch(e => handleResponseErrors(e, LOGIN_FAIL));
};


export const registerUser = userData => dispatch => {

  const url = `${ baseURL }/api/users`;

  axios.post(url, userData)
  .then(({ data }) => {
    
      const token = data.token;

      localStorage.setItem('token', token);

      dispatch(loadCurrentUser());

      dispatch({
        type: REGISTER_USER,
        payload: token
      });


    })
    .catch(e => {
    
      handleResponseErrors(e, REGISTER_FAIL)
    });
};

export const loadUsers = (id = null) => dispatch => {

  const url = `${ baseURL }/api/users`;

  axios.get(url, { params: { id: id ? id : ''}} )
  .then(({ data }) => {
      dispatch({
        type: id ? LOAD_USER_WITH_ID : LOAD_USERS,
        payload: data.data
      });
    })
    .catch(e => {
      const origin = id ? LOAD_USER_WITH_ID : LOAD_USERS;
      handleResponseErrors(e, origin);
    });
};
export const updateUserRole = userData => dispatch => {

  const url = `${ baseURL }/api/users/auth`;

  axios.put(url, userData, getConfigHeaders() )
  .then(({ data }) => {
      dispatch({
        type: UPDATE_USER_ROLE,
        payload: data.data
      });
    })
    .catch(e => {
      
      handleResponseErrors(e, UPDATE_USER_ROLE);
    });
};

export const deleteUsers = (id = null) => dispatch => {

  const url = `${ baseURL }/api/users`;

  axios.delete(url, { params: {id: id ? id: ''}})
    .then(({ data }) => {
    
      dispatch({
        type: id ? DELETE_USER_WITH_ID: DELETE_USERS,
        payload: data
      });

    })
    .catch(e => {
      const origin = id ? DELETE_USER_WITH_ID: DELETE_USERS;
      handleResponseErrors(e, origin);
    });
};

export const logout = () => dispatch => {
  dispatch({
        type: LOGOUT
      });
};