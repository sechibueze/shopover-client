import React, { Fragment } from 'react';
import ProductItems from '../ProductItems/ProductItems';

const Shop = () => {
  return ( 
    <Fragment>
      {/* <h1 className='container'> Delightsome Shops </h1> */}
      <ProductItems title="All Products" />
    </Fragment>
   );
}
 
export default Shop;