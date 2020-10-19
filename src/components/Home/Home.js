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
      <ProductItems title="Best Selling..." count="3"/> 

    {/* Featured Product */}
      <section className="section" id="features">
        <h2 className="section-title point-br">Featured Product</h2>
        <div className="container-fluid">
          <div className="feature-wrapper">

            <div className="feature-items">
              <div className="feature-card">
                <div className="feature-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" version="1.1" width="24" height="24" viewBox="0 0 24 24"><path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" /></svg>
                </div>
                <div className="feature-caption">
                  <h3>Responsive</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, mollitia!
                    sit amet consectetur adipisicing elit. Esse, mollitia!
      
                  </p>
                </div>
              </div>
              <div className="feature-card">
                <div className="feature-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" version="1.1" width="24" height="24" viewBox="0 0 24 24"><path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" /></svg>
                </div>
                <div className="feature-caption">
                  <h3>Responsive</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, mollitia!
                    sit amet consectetur adipisicing elit. Esse, mollitia!
      
                  </p>
                </div>
              </div>
              <div className="feature-card">
                <div className="feature-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" version="1.1" width="24" height="24" viewBox="0 0 24 24"><path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" /></svg>
                </div>
                <div className="feature-caption">
                  <h3>Responsive</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, mollitia!
                    sit amet consectetur adipisicing elit. Esse, mollitia!
      
                  </p>
                </div>
              </div>
            </div>
                        
            <div className="feature-product-image"></div>
          </div>
        </div>
      </section> 

    {/* Contact */}
      <section className="section" id="contact">
        <h2 className="section-title point-tl"> Contact us </h2>
        <div className="container">
          <ul className="contact-data">
          
            <li> 
              <svg className="contact-icon" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" version="1.1"  width="24" height="24" viewBox="0 0 24 24">
                <path fill="currentColor" d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z" />
              </svg>
              <address className="contact-info">

                11 Olatunji Close, <br />
                Lagos-Abeokuta Expressway, <br />
                Sango-Otta
              </address> 
            </li>
            <li> 
              <svg className="contact-icon" style={{width: '24px', height: '24px'}} viewBox="0 0 24 24">
                  <path fill="currentColor" d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z" />
              </svg>  <span className="contact-info">lightworthng@gmail.com </span>
            </li>
            <li> 
              <svg className="contact-icon" style={{width: '24px', height: '24px'}} viewBox="0 0 24 24">
                  <path fill="currentColor" d="M15,12H17A5,5 0 0,0 12,7V9A3,3 0 0,1 15,12M19,12H21C21,7 16.97,3 12,3V5C15.86,5 19,8.13 19,12M20,15.5C18.75,15.5 17.55,15.3 16.43,14.93C16.08,14.82 15.69,14.9 15.41,15.18L13.21,17.38C10.38,15.94 8.06,13.62 6.62,10.79L8.82,8.59C9.1,8.31 9.18,7.92 9.07,7.57C8.7,6.45 8.5,5.25 8.5,4A1,1 0 0,0 7.5,3H4A1,1 0 0,0 3,4A17,17 0 0,0 20,21A1,1 0 0,0 21,20V16.5A1,1 0 0,0 20,15.5Z" />
              </svg> <span className="contact-info">0813 636 3673 </span>
            </li>
            
          </ul>
          <div className="contact-form">
            <form action="" className="form">
              <span className="tip mb-1"><sup>*</sup> Required</span>
              <div className="form-group-inline">
                <div className="form-group">
                  <label htmlFor="firstname">Firstname<sup>*</sup></label>
                  <input type="text" pattern="[A-Za-z]" className="form-control"  required name="firstname" id="firstname" placeholder="Firstname"/>
                </div>
                <div className="form-group">
                  <label htmlFor="lastname">Lastname<sup>*</sup></label>
                  <input type="text" pattern="[A-Za-z]" className="form-control" required name="lastname" id="lastname" placeholder="Lastname"/>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="email">Email <sup>*</sup></label>
                <input type="email" className="form-control" required name="email" id="email" placeholder="Email"/>
              </div>
              <div className="form-group">
                <label htmlFor="message">Message <sup>*</sup></label>
                <textarea cols="20" rows="5" className="form-control"  required name="message" id="message" placeholder="message"></textarea>

              </div>

              <button type="submit" className="btn btn-primary">Submit Request</button>
            </form>
          </div>
        </div>
      </section>
      <section class="" id="footer"> 

        &copy; 2020 &nbsp; Lightworth Computing
      </section>
    </Fragment>
    
   );
}
 
export default Home;