import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import AuthContainer from '../AuthContainer';

const Dashboard = ({
  currentUser
}) => {
  return ( 
    <AuthContainer>
      <h1> Hellow { currentUser && currentUser.firstname } </h1>
    </AuthContainer>
   );
}
 
Dashboard.propTypes = {
  isAuthenticated: PropTypes.bool,
  currentUser: PropTypes.object.isRequired
}
const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  currentUser: state.auth.currentUser,
});
export default connect(mapStateToProps)(Dashboard);