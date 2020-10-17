import React from 'react';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import { addProductToCart } from '../../_actions/CartActions';
const ProductCard = ({history, product,  addProductToCart }) => {
  const handleAddToCart = () => {
    const {_id, title, description, price, productImage} = product;
    let toCartProduct = { _id, title, description, price, productImage, quantity: 1 };
    addProductToCart(toCartProduct);
  };
  const handleBuyNowRequest = () => {
    handleAddToCart();
    history.push('/cart')
  };

  const { title, price, productImage } = product;
  return ( 
        <div className="col-3">
          <div className="product-card">
            <img src={productImage ? productImage : 'https://picsum.photos/100'} className="product-card-image" alt="Product 1 media" />
            <p className="product-title"> { title && title } </p>
            <p className="product-" style={{ fontWeight: 'bold'}}> N { price && price } </p>
            <span className="product-card-rating"> 
              <i className="fa fa-star"></i> 
              <i className="fa fa-star"></i> 
              <i className="fa fa-star"></i> 
              <i className="fa fa-star-half"></i> 
            </span>
            <div className="product-card-cta">
              <button onClick={() => handleBuyNowRequest()}  className="btn btn-reverse"> <i className="fa fa-shopping-cart"></i>  Buy Now </button>
              <button onClick={() => handleAddToCart()} className="btn btn-primary "> <i className="fas fa-check-circle"></i> Add to Cart </button>
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
export default connect(mapStateToProps, { addProductToCart })(withRouter(ProductCard));