import React, { useEffect } from 'react';
import { connect }  from 'react-redux';
import PropTypes from 'prop-types';
import { getProductItems } from '../../_actions/ProductActions';
import ProductCard from '../ProductCard/ProductCard';
import Title from '../Title/Title';

const ProductItems = ({ getProductItems, productItems, title, count }) => {

  useEffect(() => {
    let filter = { visibility: true}
    getProductItems(filter);
  }, [])
  const numItemsToDisplay = count ? count : productItems.length;

  return ( 
    <section>
      <Title title={ title ? title : 'Featured Products'} />
      <div className="grid-wrapper" style={{justifyContent: "center"}}>
        {
          productItems && productItems.length > 0 ? productItems.slice(0, numItemsToDisplay).map((product, idx) => <ProductCard key={idx} product={product} />) : ""
        }
      </div>
    </section>
   );
}
 ProductItems.propTypes = {
   getProductItems: PropTypes.func.isRequired,
   
 };
const mapStateToProps = state => ({
  productItems: state.products.productItems
});
export default connect(mapStateToProps, { getProductItems })(ProductItems);