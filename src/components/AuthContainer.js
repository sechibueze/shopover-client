import React, { Fragment } from 'react';
import AuthSidebar from './AuthSidebar';

const AuthContainer = ({ children }) => {
  return (
    <Fragment>
       <div className="auth-container">
        <input type="checkbox"  id="auth-sidebar-control"/>
        <label htmlFor="auth-sidebar-control" className="auth-sidebar-handle fa fa-bars fa-2x" />
        <AuthSidebar />
        <div className="auth-main">         
          <div className="auth-wrapper">
            { children }
          </div>
        </div>
      </div>
    </Fragment>
  );
}
 
export default AuthContainer;