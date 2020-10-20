import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { APP_NAME } from '../../_utils/constants';
import AuthContainer from '../AuthContainer';
import ProductItems from '../ProductItems/ProductItems';

const Dashboard = ({
  currentUser
}) => {
  return ( 
    <AuthContainer>
      <h1> Hello { currentUser && currentUser.firstname } </h1>
      <p> Welcome to { APP_NAME } - the home of exciting offers </p>

      <ProductItems title="Continue shopping" />
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