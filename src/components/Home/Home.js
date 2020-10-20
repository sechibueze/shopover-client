import React, { Fragment, useState} from 'react';
import { Link } from 'react-router-dom';
import ProductItems from '../ProductItems/ProductItems';
import {APP_NAME } from '../../_utils/constants';

const Home = () => {
  const [data, setData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    message: ''
  });
  const handleChange = ({ target }) => {
    let { name, value } = target;
    setData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    let message = 'Please send an email to the developer: sechibueze@gmail.com'
    return alert(message);
  }
  const { firstname, lastname, email, message} = data;
  return ( 
    <Fragment>
      
      <header className="page-header">
        <div className="banner container">
          <div className="banner-caption">
            <h1>Shopping made simple</h1>
            <p>
              Use { APP_NAME } to bring quality to your budget, enjoy exclusive deals
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
      <section className="section" style={{margin: 'auto', textAlign: 'center'}}>
        <Link to="/shop" className="btn btn-primary"> <span className="icon fa fa-shopping-cart" style={{color: '#F1F1F1'}}/> ShopOver NOW </Link>
      </section>
    {/* Featured Product */}
      <section className="section" id="features">
        <h2 className="section-title point-br">Featured Product</h2>
        <div className="container-fluid">
          <div className="feature-wrapper">

            <div className="feature-items">
              <div className="feature-card">
                <div className="feature-icon">
                  <span className="icon fa fa-shopping-bag" />
                </div>
                <div className="feature-caption">
                  <h3>Shop on budget</h3>
                  <p>
                    At { APP_NAME }, we offer quality products that match your budget. You don't need to
                    break the bag or leave holes on your pocket to have a quality life
      
                  </p>
                </div>
              </div>
              <div className="feature-card">
                <div className="feature-icon">
                  <span className="icon fa fa-tags" />
                </div>
                <div className="feature-caption">
                  <h3> Seamless shopping</h3>
                  <p>
                    Making money can be difficult, spending it shouldn't be especially on all the things
                    you love. With { APP_NAME }, you get no traffics,  exciting collection of all your 
                    needs organized in category.
                    So you don't have to spend a ton of time looking for it.
      
                  </p>
                </div>
              </div>
              <div className="feature-card">
                <div className="feature-icon">
                  <span className="icon far fa-credit-card" />
                </div>
                <div className="feature-caption">
                  <h3>Secure payment</h3>
                  <p>
                    Your credit card is secured with { APP_NAME }, use payment systems taht you trust
                    - USSD, bank or credit card. We use SSL to provide high encryption of your data 
                    at checkout. Our customers love us for that.
      
                  </p>
                </div>
              </div>
            </div>
                        
            <div className="feature-product-image"></div>
          </div>
        </div>
      </section> 
      {/* Testimonials */}
      <section className="section" id="testimonial">
        <h2 className="section-title point-tl">Happy Customers</h2>
        <div className="container">
          <div className="testimony-wrapper">
            <div className="testimony">
              <div className="message">
                I use { APP_NAME } for all my family and business shopping. It saves time and 
                I get quality products for the best prices right at my doorstep at no extra cost.
              </div>
              <div className="person">
                <img src="https://picsum.photos/50" alt="Testifier profile ID"/>
                <ul>
                  <li>Bolaji Ahmed</li>
                  <li>Manager, Bella Foods</li>
                </ul>
              </div>
            </div>
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
              </svg>  <span className="contact-info">sechibueze@gmail.com </span>
            </li>
            <li> 
              <svg className="contact-icon" style={{width: '24px', height: '24px'}} viewBox="0 0 24 24">
                  <path fill="currentColor" d="M15,12H17A5,5 0 0,0 12,7V9A3,3 0 0,1 15,12M19,12H21C21,7 16.97,3 12,3V5C15.86,5 19,8.13 19,12M20,15.5C18.75,15.5 17.55,15.3 16.43,14.93C16.08,14.82 15.69,14.9 15.41,15.18L13.21,17.38C10.38,15.94 8.06,13.62 6.62,10.79L8.82,8.59C9.1,8.31 9.18,7.92 9.07,7.57C8.7,6.45 8.5,5.25 8.5,4A1,1 0 0,0 7.5,3H4A1,1 0 0,0 3,4A17,17 0 0,0 20,21A1,1 0 0,0 21,20V16.5A1,1 0 0,0 20,15.5Z" />
              </svg> <span className="contact-info">0813 636 3673 </span>
            </li>
            
          </ul>
          <div className="contact-form">
            <form onSubmit={handleSubmit} className="form">
              <span className="tip mb-1"><sup>*</sup> Required</span>
              <div className="form-group-inline">
                <div className="form-group">
                  <label htmlFor="firstname">Firstname<sup>*</sup></label>
                  <input type="text" onChange={handleChange} value={firstname}  className="form-control"  required name="firstname" id="firstname" placeholder="Firstname"/>
                </div>
                <div className="form-group">
                  <label htmlFor="lastname">Lastname<sup>*</sup></label>
                  <input type="text" onChange={handleChange} value={lastname}  className="form-control" required name="lastname" id="lastname" placeholder="Lastname"/>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="email">Email <sup>*</sup></label>
                <input type="email" onChange={handleChange} value={email} className="form-control" required name="email" id="email" placeholder="Email"/>
              </div>
              <div className="form-group">
                <label htmlFor="message">Message <sup>*</sup></label>
                <textarea cols="20" rows="5" onChange={handleChange} value={message} className="form-control"  required name="message" id="message" placeholder="message"></textarea>

              </div>

              <button type="submit" className="btn btn-primary">Submit Request</button>
            </form>
          </div>
        </div>
      </section>
      
    </Fragment>
    
   );
}
 
export default Home;