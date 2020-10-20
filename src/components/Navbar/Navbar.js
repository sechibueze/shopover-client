import React, { Fragment } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import { Link }  from 'react-router-dom';
import { APP_NAME } from '../../_utils/constants';
import { logout } from '../../_actions/AuthActions';
const Navbar = ({ isAuthenticated, cartItems, logout }) => {

  
  return ( 
    <nav className="navbar" data-test="navbar">
      <input type="checkbox" id="navlink-control" />
      <div className="navbar-wrapper">
        <Link to='/' className="logo">
          <span className="logo-icon fas fa-shopping-basket fa-2x" />
          <span className="logo-name"> { APP_NAME } </span>
        </Link>

        <label htmlFor="navlink-control" className="hamburger fa fa-bars fa-2x"/>


        <div className="navlinks"> 
          <Link to="/" className="navlink">Home</Link>
          <Link to="/shop" className="navlink"> <span className="icon fas fa-store-slash" />Shop</Link>
          <Link to="/cart" className="navlink"> <span className="icon fa fa-shopping-cart" />Cart  { cartItems.length > 0 && (<sup> <span className="badge badge-primary"> { cartItems.length } </span> </sup>) } </Link>
          {
            isAuthenticated ? (
              <Fragment>
                <Link to="/dashboard" className="navlink"> <span className="icon fa fa-user" /> Account</Link>
                {/* <span onClick={() => logout()} > <span className="fa fa-sign-out"/> Logout</span> */}
              </Fragment>

            ) : (
              
              <Fragment>
                <Link to="/register" className="navlink"> <span className="icon fa fa-users" />  Signup</Link>
                <Link to="/login" className="navlink"> <span className="icon fa fa-sign-in-alt" /> Login</Link>
              </Fragment>
            )
          }
          
        </div>
      </div>
    </nav>
   );
}

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  cartItems: PropTypes.array.isRequired
};
const mapStateToProps = state => ({
  cartItems: state.cart.items,
  isAuthenticated: state.auth.isAuthenticated,
  currentUser: state.auth.currentUser,
})
export default connect(mapStateToProps, { logout })(Navbar);
