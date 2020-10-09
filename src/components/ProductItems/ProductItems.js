import React, { useEffect } from 'react';
import { connect }  from 'react-redux';
import PropTypes from 'prop-types';
import { getProductItems } from '../../_actions/ProductActions';
import ProductCard from '../ProductCard/ProductCard';
import Title from '../Title/Title';

const ProductItems = ({
  getProductItems,
  productItems
}) => {

  useEffect(() => {
    let filter = { visibility: true}
    getProductItems(filter);
  }, [])

  return ( 
    <section>
      <Title title='Featured Products' />
      <div className="grid-wrapper">
        {
          productItems && productItems.length > 0 ? productItems.map((product, idx) => <ProductCard key={idx} product={product} />) : "Empty Product"
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