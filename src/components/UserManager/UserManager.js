import React, {useEffect } from 'react';
import { connect }  from 'react-redux';
import PropTypes from 'prop-types';
import AuthContainer from '../AuthContainer';
import { loadUsers, deleteUsers } from '../../_actions/AuthActions';



const UserManager = ({currentUser, loadUsers, deleteUsers, userData, prevUser }) => {
  
  const filterID = currentUser.roles.includes('admin') ? null : currentUser._id;
  const loadUserByFilter = () => loadUsers(filterID);

  useEffect(loadUserByFilter, [ prevUser]);

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
      <div className="auth-action" style={{marginTop: "1rem"}}>
        <span onClick={() => handleFlushAllUsers()}> <span className="icon fa fa-trash" /> Fluash ALL { userData.length } </span>
      </div>
     
    
          <table className="table">
            <thead>
              <tr>
                <th> S/N </th>
                <th> Image </th>
                <th> Email </th>
                <th> Firstname </th>
                <th> Lastname </th>
                <th> Role(s) </th>
                <th> Delete </th>
              </tr>
            </thead>
            <tbody>


              {
                userData.length > 0  && userData.map((user, idx) => {
                  let {_id, profileImage, roles, email, firstname, lastname } = user;
                  
                  return (
                    <tr>
                      <td> { ++idx} </td>
                      <td> <img  style={{ width: '32px', height: '32px'}} src={ profileImage ? profileImage : 'https://picsum.photos/32'} alt="Member profile ID" /> </td>
                      <td> { email && email} </td>
                      <td> { firstname && firstname} </td>
                      <td> { lastname && lastname} </td>
                      <td> { roles && roles.join(', ')} </td>
                      <td> <span className="fa fa-times" onClick={() => handleDeleteUserById(_id)} /> </td>
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