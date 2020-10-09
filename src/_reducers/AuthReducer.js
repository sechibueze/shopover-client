import {
  REGISTER_USER,
  REGISTER_FAIL,
  LOGIN_USER,
  LOGIN_FAIL,
  AUTH_FAIL,
  SET_CURRENT_USER,
  LOAD_USERS,
  LOADING,
  LOGOUT,
  LOADED,
  DELETE_USERS,
  DELETE_USER_WITH_ID,
  LOAD_USER_WITH_ID,
  UPDATE_USER_ROLE,
} from '../_actions/types';

const intialState = {
  token: null,
  isAuthenticated: null,
  currentUser: null,
  loading: false,
  prevUser: null,
  userData: [],
  loadedUser: null,
  userRoleUpdate: null

};
export default (state = intialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case REGISTER_USER:
    case LOGIN_USER:
      return {
        ...state,
        isAuthenticated: true,
        token: payload
      };
    
      case REGISTER_FAIL:
      case LOGIN_FAIL:
      case AUTH_FAIL:
      case LOGOUT:
        localStorage.removeItem('token');
        return {
          ...state,
          token: null,
          isAuthenticated: null,
          currentUser: null,

        };

      case SET_CURRENT_USER:
        return {
          ...state,
          isAuthenticated: true,
          currentUser: payload,
        };
      case LOAD_USERS:
        return {
          ...state,
          userData: payload
        };
      case LOAD_USER_WITH_ID:
        return {
          ...state,
          loadedUser: payload
        };
      case DELETE_USER_WITH_ID:
      case DELETE_USERS:
        return {
          ...state,
          prevUser: payload
        };
      case UPDATE_USER_ROLE:
        return {
          ...state,
          userRoleUpdate: payload
        };
      case LOADING:
        return {
          ...state,
          loading: true
        };
      case LOADED:
        return {
          ...state,
          loading: false
        };
      
      
  
    default:
      return state;
     
  }
};