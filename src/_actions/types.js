export const baseURL = process.env.NODE_ENV !== 'production' ? 'http://localhost:5000' : 'https://shopover.herokuapp.com';
// Payment

export const PAY_WITH_PAYSTACK = 'PAY_WITH_PAYSTACK';

// ?User Manager
export const LOAD_USERS = 'LOAD_USERS';
export const LOAD_USER_WITH_ID = 'LOAD_USER_WITH_ID';
export const DELETE_USER_WITH_ID = 'DELETE_USER_WITH_ID';
export const DELETE_USERS = 'DELETE_USERS';
export const UPDATE_USER_ROLE = 'UPDATE_USER_ROLE';

// Collections
export const CREATE_COLLECTION = 'CREATE_COLLECTION';
export const EDIT_COLLECTION = 'EDIT_COLLECTION';
export const DELETE_COLLECTION = 'DELETE_COLLECTION';
export const RESET_COLLECTION = 'RESET_COLLECTION';
export const GET_COLLECTIONS = 'GET_COLLECTIONS';
// export const CREATE_COLLECTION = 'CREATE_COLLECTION';


// Products
export const ADD_PRODUCT = 'ADD_PRODUCT';
export const GET_PRODUCT = 'GET_PRODUCT';
export const GET_PRODUCT_ITEMS = 'GET_PRODUCT_ITEMS';
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT';
export const TOGGLE_PRODUCT_VISIBILITY = 'TOGGLE_PRODUCT_VISIBILITY';
export const DELETE_PRODUCT = 'DELETE_PRODUCT';
export const RESET_PRODUCT = 'RESET_PRODUCT';


// Alert
export const SET_ALERT = 'SET_ALERT';
export const CLEAR_ALERT = 'CLEAR_ALERT';


// Auth
export const SET_CURRENT_USER = 'SET_CURRENT_USER';
export const REGISTER_USER = 'REGISTER_USER';
export const LOGIN_USER = 'LOGIN_USER';
export const REGISTER_FAIL = 'REGISTER_FAIL';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const AUTH_FAIL = 'AUTH_FAIL';
export const LOADING = 'LOADING';
export const LOADED = 'LOADED';
export const LOGOUT = 'LOGOUT';

// Cart 
export const ADD_CART = 'ADD_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const UPDATE_CART = 'UPDATE_CART';
export const UPDATE_PRODUCT_QUANTITY = 'UPDATE_PRODUCT_QUANTITY';
export const CLEAR_CART = 'CLEAR_CART';