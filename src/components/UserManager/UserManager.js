import React, { Fragment, useState, useEffect } from 'react';
import { connect }  from 'react-redux';
import PropTypes from 'prop-types';
import AuthContainer from '../AuthContainer';
import Modal from '../Modal';
import { loadUsers, deleteUsers } from '../../_actions/AuthActions';



const UserManager = ({currentUser, loadUsers, deleteUsers, userData, prevUser }) => {
  

  useEffect(() => {
    const filterID = currentUser.roles.includes('admin') ? null : currentUser._id;
    loadUsers(filterID);
  } , [ prevUser]);

  const handleDeleteUserById = id => {
    if (window.confirm('Are you sure?' + id)) {
      deleteUsers(id);
    }
  }
  const handleFlushAllUsers = () => {
    if (window.confirm('Are you sure?')) {
      deleteUsers();
    }
  }
  
  return ( 
    <AuthContainer>
      <div className="auth-action">
        <span onClick={() => handleFlushAllUsers()}> Fluash ALl { userData.length } </span>
      </div>
     
    
          <table>
            <thead>
              <tr>
                <td> S/N </td>
                <td> Firstname </td>
                <td> Lastname </td>
                
                <td> Delete </td>
              </tr>
            </thead>
            <tbody>


              {
                userData.length > 0  && userData.map((user, idx) => {
                  let {_id, firstname, lastname } = user;
                  
                  return (
                    <tr>
                      <td> { ++idx} </td>
                      <td> { firstname && firstname} </td>
                      <td> { lastname && lastname} </td>
                      <td> <span className="fa fa-close" onClick={() => handleDeleteUserById(_id)} /> </td>
                    </tr>
                  )
                
                })
              }
            </tbody>

        </table>
      
  




    </AuthContainer>
   );
}
 UserManager.propTypes = {
   loadUsers: PropTypes.func.isRequired,
   deleteUsers: PropTypes.func.isRequired,
   
 };
const mapStateToProps = state => ({ 
  currentUser: state.auth.currentUser,
  userData: state.auth.userData,
  prevUser: state.auth.prevUser,
});
export default connect(mapStateToProps, { loadUsers, deleteUsers })(UserManager);