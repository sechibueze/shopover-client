import React, { Fragment } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import { removeItemFromCart, updateProductQuantity } from '../../_actions/CartActions';
const CartItems = ({
  cartItems,
  updateProductQuantity,
  removeItemFromCart
}) => {

  const updateQuantity = (e, productId) => {
    updateProductQuantity(productId, e.target.value);
  };
  return (
    <Fragment>

    {
      cartItems.length > 0 ? (
        <table class="table cart-table">
          <thead>
            <tr>
              <th> S/N </th>
              <th> Image </th>
              <th> Name </th>
              <th> Price </th>
              <th> Quantity </th>
              <th> Change Quantity </th>
              <th> Remove </th>
              <th> item total </th>
            </tr>
          </thead>
          <tbody>
            {
              cartItems.map((item, idx) => {
                const {_id, title, productImage, price, quantity} = item;
                
                return (
                  <tr>
                    <td> { ++idx} </td>
                    <td> <img src={ productImage } style={{width: '35px', height: '35px'}} /> </td>
                    <td> { title && title } </td>
                    <td> { price && price } </td>
                    <td> { quantity && quantity }  </td>
                    <td> <input type="number" value={ quantity && quantity } min="1" onChange={(e) => updateQuantity(e, _id)} style={{width: '35px'}} /> </td>
                    <td> <span className="fa fa-times" onClick={() => removeItemFromCart(_id)} /> </td>
                    <td> {  parseFloat(price) * parseInt(quantity) }  </td>
                  
                  </tr>
                )
              
              })
            }
          
          </tbody>
      </table>
      ) : <h1> No items in cart </h1>
    }
    </Fragment>
   );
}
 
CartItems.propTypes = {
  removeItemFromCart: PropTypes.func.isRequired,
  updateProductQuantity: PropTypes.func.isRequired,
  cartItems: PropTypes.array.isRequired
};
const mapStateToProps = state => ({
  cartItems: state.cart.items
})
export default connect(mapStateToProps, {updateProductQuantity, removeItemFromCart})(CartItems);