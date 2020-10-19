import React, { Fragment} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../_actions/AuthActions';
import { Link } from 'react-router-dom';
import { APP_NAME } from '../_utils/constants';

const AuthSidebar = ({ 
  logout,
  currentUser
 }) => {

  
  
  return (
    <Fragment>
      <aside className="auth-sidebar">
        <label htmlFor="auth-sidebar-control" className="auth-sidebar-close fa fa-times" />
        <header className="sidebar-header">
          <Link to='/'>
            <span className="sidebar-icon fas fa-shopping-basket" />
            <span className="sidebar-name"> { APP_NAME} </span>
          </Link>
        </header>
        <ul className="sidebar-actions">
          <li>
            <Link to='/product-manager' className="auth-sidebar-link"> <i className="fas fa-wallet" /> &nbsp;  Products</Link>
          </li>

          {
            currentUser && currentUser.roles.includes('admin') && (

              <Fragment>
                <li>
                  <Link to='/collections' className="auth-sidebar-link"> <span className="fa fa-tags" /> &nbsp; Collections</Link>
                </li>
                <li>
                  <Link to='/user-manager' className="auth-sidebar-link"> <span className="fa fa-users" /> &nbsp; User Admin</Link>
                </li>
              </Fragment>

            )
          }

          
          <li>
            <span onClick={() => logout()} className="auth-sidebar-link"> <span className="fa fa-sign-out-alt" /> Logout</span>           
          </li>
          
        </ul>
      </aside>
    </Fragment>
  );
}
 
AuthSidebar.propTypes = {
  logout: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};
 const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    currentUser: state.auth.currentUser
 });
export default connect(mapStateToProps, { logout })(AuthSidebar);
