import {
  PAY_WITH_PAYSTACK,
} from '../_actions/types';

const initialState = {
  initializePayment: null

};

export default (state = initialState, action) => {
  const { type, payload} = action;

  switch (type) {
    case PAY_WITH_PAYSTACK:
      return {
        ...state,
        initializePayment: payload
      };
    
    default:
      return state;
  }
};