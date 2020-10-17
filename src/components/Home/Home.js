import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import ProductItems from '../ProductItems/ProductItems';

const Home = () => {

  return ( 
    <Fragment>
      
      <header className="page-header">
        <div className="banner container">
          <div className="banner-caption">
            <h1>Shopping made simple</h1>
            <p>
              Use ShopOver to bring quality to your budget, enjoy exclusive deals
              and exciting offers from the comfort of your home.
            </p>
            <div className="banner-cta">
              <Link to="/register" className="btn btn-primary"> Get started</Link>
              <Link to="/shop" className="btn btn-reverse"> ShopOver Now</Link>
            </div>
          </div>
          <div className="banner-hero">
            <h1> Shop Right</h1>
          </div>
        </div>
      </header>
      <ProductItems title="Best Selling..." />  
    </Fragment>
    
   );
}
 
export default Home;