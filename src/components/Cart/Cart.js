import React, { Fragment, useState } from 'react';
import { Redirect } from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Alert from '../Alert/Alert';

import CartItems from './CartItems';
import axios from 'axios';
import { baseURL } from '../../_actions/types';
import { setAlert } from '../../_actions/AlertActions';

const Cart = ({currentUser, setAlert, cartItems, history }) => {
  const [paymentUrl, setPaymentUrl] = useState('');

  const calculateTotalPay = () => {
    let total = 0;

    cartItems.map(({ price, quantity}) => {
      total += parseFloat(price) * parseInt(quantity);
    });

    return total;
  };

  const handlePayment = () => {
    // e.preventDefault();
    if (!currentUser) {
      return setAlert('You must Login to continue', 'CART_PAYMENT');
    }
    const { email } = currentUser;
    const amount = calculateTotalPay() * 100; // to kobo
    const paystackPayload = { email, amount, callback_url: `https://shopover.netlify.app/callback_url` };
    const url = `${baseURL}/api/transactions`
    axios.post(url, paystackPayload)
      .then(({ data }) => {
        setPaymentUrl(data.data.authorization_url)
      })
      .catch(e => { console.log(e)})
    

  };
  
  return ( 
    
  <div class="container">
    <Alert origin={'CART_PAYMENT'} />
    <CartItems />

    {
      cartItems.length > 0 && (

        <div class="order-details clearfix">
          {/* onSubmit={handlePayment} */}
          <span   class="cart-order-form">
            <input type="hidden" value={calculateTotalPay()} />
            <table>
            <thead>
              <tr>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              
              <tr>
                <td> Total Pay </td>
                <td> { calculateTotalPay()} </td>
              </tr>
            </tbody>
          </table>
            <button onClick={() => handlePayment()} class="cart-order-btn"> Place Order </button>

            {
              paymentUrl && <a href={paymentUrl}> Pay NOW </a>
            }

          {/* </form> */}
          </span>
        </div>
      )
    }

  </div>
  
   );
}
 
Cart.propTypes = {
  setAlert: PropTypes.func.isRequired,
  cartItems: PropTypes.array.isRequired
};
const mapStateToProps = state => ({
  cartItems: state.cart.items,
  currentUser: state.auth.currentUser,
})
export default connect(mapStateToProps, { setAlert })(Cart);