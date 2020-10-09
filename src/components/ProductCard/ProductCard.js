import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import { addProductToCart } from '../../_actions/CartActions';
const ProductCard = ({ product,  addProductToCart }) => {
  const handleAddToCart = () => {
    const {_id, title, description, price, productImage} = product;
    let toCartProduct = { _id, title, description, price, productImage, quantity: 1 };
    addProductToCart(toCartProduct);
  };

  const { title, price, productImage } = product;
  return ( 
        <div className="col-3">
          <div className="product-card">
            <img src="/img/products/product3.jpg" className="product-card-image" alt="Product 1 media" />
            <p className="product-title"> { title && title } </p>

            <p className="product-title"> { price && price } </p>
            <span className="product-card-rating"> 
              <i className="fa fa-star-o"></i> 
              <i className="fa fa-star-o"></i> 
              <i className="fa fa-star-o"></i> 
              <i className="fa fa-star-o"></i> 
            </span>
            <div className="product-card-cta">
              <button type="submit" className="buy-now-cta"> <i className="fa fa-user"></i>  Buy Now </button>
              <button onClick={() => handleAddToCart()} className="add-cart-cta"> <i className="fa fa-heart"></i> Add to Cart </button>
            </div>
          </div>
        </div>
   );
}

ProductCard.propTypes = {
  addProductToCart: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  cartItems: state.cart.items
});
export default connect(mapStateToProps, { addProductToCart })(ProductCard);