import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Alert from '../Alert/Alert';
import { Link, Redirect } from 'react-router-dom';
import { APP_NAME } from '../../_utils/constants';
import { loginUser } from '../../_actions/AuthActions';
import { LOGIN_FAIL } from '../../_actions/types';

const Login = ({
  isAuthenticated,
  loginUser
}) => {
  const [data, setData] = useState({
    email: '',
    password: ''
  });
  const handleChange = ({ target }) => {
    const { name, value} = target;
    setData(prev => ({
      ...prev,
      [name]: value
    }))
  };
  const handleLogin = e => {
    e.preventDefault();
    loginUser(data)
  }

  const { email, password } = data;

  if(isAuthenticated) return <Redirect to='/dashboard' />
  return ( 
    <Fragment>
        <form className="form container" onSubmit={handleLogin} name="login-form" id="login-form">
          <h2 className="text-lead">  <span className='fa fa-users' /> &nbsp; Login </h2>
          <p className="text-sub">Join our community of passionate learners</p>
          <sup>*</sup> means Required
          <Alert origin={LOGIN_FAIL} />
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

          <button type="submit" id="login-btn" className="btn btn-primary btn-md"> <span className='fa fa-user' /> &nbsp; Login </button>

          <p className="my-2">Don't have an account? <Link to="/register">Signup</Link> </p>
        </form>
    </Fragment>
   );
}
 
Login.propTypes = {
  // setAlert: PropTypes.func.isRequired,
  loginUser: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  // isAuthenticated: state.auth.isAuthenticated,
});
export default connect(mapStateToProps, { loginUser })(Login);
// export default ;