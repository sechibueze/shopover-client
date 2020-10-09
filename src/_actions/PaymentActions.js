import axios from 'axios';
import { 
  PAY_WITH_PAYSTACK,
} from './types';
import { handleResponseErrors } from './AlertActions';
import { getConfigHeaders } from './AuthActions';

export const payWithPaystack = payload => dispatch => {
  dispatch({ type: LOADED});
  const config = getConfigHeaders();
  const url = `${ baseURL }/api/payment`;

  axios.post(url, payload, config)
    .then(({ data }) => {
      dispatch({
        type: PAY_WITH_PAYSTACK,
        payload: data.data
      });

      dispatch({ type: LOADED })
    })
    .catch(e => handleResponseErrors(e, PAY_WITH_PAYSTACK))
};