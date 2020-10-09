import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { updateUserRole } from '../../_actions/AuthActions';
import { UPDATE_USER_ROLE } from '../../_actions/types';
import Alert from '../Alert/Alert';

const Secret = ({
  isAuthenticated,
  updateUserRole
}) => {
  const [data, setData] = useState({
    email: '',
  });
  const handleChange = ({ target }) => {
    const { name, value} = target;
    setData(prev => ({
      ...prev,
      [name]: value
    }))
  };
  const handleUserRoleUpdate = e => {
    e.preventDefault();
    updateUserRole(data)
  }

  const { email } = data;


  return ( 
    <Fragment>
        <form className="form container" onSubmit={handleUserRoleUpdate} name="login-form" id="login-form">
          <h2 className="text-lead">  <span className='fa fa-users' /> &nbsp; Update User Role </h2>
          
          <sup>*</sup> means Required

          <Alert origin={UPDATE_USER_ROLE} />

          <div className="form-group">
            <label htmlFor="email">Email<sup>*</sup></label>
            <input type="email" name="email" onChange={handleChange}  value={email} className="form-control" id="email" placeholder="jsmith@js.com" />
            
          </div>

          

          <button type="submit" id="login-btn" className="btn btn-primary btn-md"> <span className='fa fa-user' /> &nbsp; Update User Auth </button>

          
        </form>
    </Fragment>
   );
}
 
Secret.propTypes = {
  // setAlert: PropTypes.func.isRequired,
  updateUserRole: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
});
export default connect(mapStateToProps, { updateUserRole })(Secret);
