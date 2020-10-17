import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Link, Redirect } from 'react-router-dom';
import { APP_NAME } from '../../_utils/constants';

import { setAlert } from '../../_actions/AlertActions';
import { registerUser } from '../../_actions/AuthActions';
import { REGISTER_FAIL } from '../../_actions/types';
import Alert from '../Alert/Alert';

const Register = ({
  isAuthenticated,
  setAlert,
  registerUser
}) => {
  const [data, setData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    confirm_password: ''
  });
  const handleChange = ({target}) => {
    const { name, value } = target;
    setData(prev => ({
      ...prev,
      [name]: value
    }))
  };
  const handleSignup = e => {
    e.preventDefault();
    const { firstname, lastname, email, password, confirm_password } = data;
    if (password.trim() !== confirm_password.trim()) {
      
      return setAlert('Password do not match', REGISTER_FAIL);
      
    }
   
    const userData = { firstname, lastname, email, password };
    registerUser(userData)
  }

  const { firstname, lastname, email, password, confirm_password } = data;
  if(isAuthenticated) return <Redirect to='/dashboard' />
  return ( 
    <Fragment>
        <form className="form container" onSubmit={handleSignup} name="signup-form" id="signup-form">
          <h2 className="title">  <span className='icon fa fa-users' />  Signup</h2>
          <p className="sub-title">Signup to enjoy exciting offers and best deals</p>
          <small><sup>*</sup> means Required</small>
       
          <Alert origin={REGISTER_FAIL} />

          <div className="form-group">
            <label htmlFor="firstname">Firstname<sup>*</sup></label>
            <input type="text" onChange={handleChange} name="firstname" value={firstname} className="form-control" id="firstname" placeholder="John" />
          </div>

          <div className="form-group">
            <label htmlFor="lastname">Lastname<sup>*</sup></label>
            <input type="text" onChange={handleChange} name="lastname" value={lastname} className="form-control" id="lastname" placeholder="Smith" />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email<sup>*</sup></label>
            <input type="email" name="email" onChange={handleChange}  value={email} className="form-control" id="email" placeholder="jsmith@js.com" />
            <small> {APP_NAME} uses Gravatar, so If you want Gravatar, use an associated email account</small>
          </div>

          <div className="form-group">
            <label htmlFor="password">Password<sup>*</sup></label>
            <input type="password" name="password" onChange={handleChange} value={password} className="form-control" id="password"
              placeholder="minimun of 8 characters" />
          </div>

          <div className="form-group">
            <label htmlFor="confirm_password">Confirm Password<sup>*</sup></label>
            <input type="password" name="confirm_password" onChange={handleChange}  value={confirm_password} className="form-control" id="confirm_password"
              placeholder="Confirm password" />
          </div>

          <button type="submit" id="signup-btn" className="btn btn-reverse "> <span className='icon fa fa-users' />  Signup </button>

          <p className="my-2">Already has an account? <Link to="/login">Login</Link> </p>
        </form>
    </Fragment>
   );
}
Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  registerUser: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,

});
export default connect(mapStateToProps, { setAlert, registerUser })(Register);