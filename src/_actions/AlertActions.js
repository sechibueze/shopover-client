import { v4 } from 'uuid';
import { SET_ALERT, CLEAR_ALERT, LOADED } from './types';


export const setAlert = (alertText, origin = '', type="danger", alertId = v4() ,  timeout=3000 ) => dispatch => {
  
  dispatch({
    type: SET_ALERT,
    payload: { alertText, alertId, origin, type }
  });

  setTimeout(() => (dispatch({
    type: CLEAR_ALERT,
    payload: alertId
  })), timeout)
}
 
export const clearAlert = (alertId = null) => dispatch => {
  dispatch({
    type: CLEAR_ALERT,
    payload: alertId
  });
};

export const handleResponseErrors = (err, origin = "", type = 'danger') => dispatch => {
    console.log('err : ', err, origin)
    let payload = {
              alertId: v4(),
              // alertText: e,
              origin, 
              type
            }

    let alertText = err.toString()
    if (err.response) {
      if (err.response.status === 422) {
        alert = err.response.data.errors
      } else {
        
            alertText = typeof err.response.data === 'object' ? err.response.data.error : err.response.data;
            
       
      }
    } else if ( err.request) {
     alertText = err.request.responseText    
    }
  if (err.response.status !== 422 && err.response.data) {
    alertText = err.response.data.error
  }

  payload.alertText = alertText;
  dispatch({
    type: SET_ALERT,
    payload
  });
  dispatch({ type: LOADED });


};