import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import store from './store';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Shop from './components/Shop/Shop';
import Cart from './components/Cart/Cart';
import Dashboard from './components/Dashboard/Dashboard';
import { loadCurrentUser } from './_actions/AuthActions';
import Authenticate from './components/Dashboard/Authenticate';
import ProductManager from './components/ProductManager/ProductManager';
import CollectionManager from './components/Collections/CollectionManager';
import UserManager from './components/UserManager/UserManager';
import Secret from './components/Login/Secret';
import CallbackHandler from './components/TransactionManager/CallbackHandler';

store.dispatch(loadCurrentUser());
const App = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Navbar />
          <Route path='/' exact component={Home} />
          <Route path='/callback_url' exact component={CallbackHandler} />
          <Route path='/shop' exact component={Shop} />
          <Route path='/cart' exact component={Cart} />
          <Route path='/register' exact component={Register} />
          <Route path='/login' exact component={Login} />
          <Route path='/secret' exact component={Secret} />
          <Authenticate path='/dashboard' exact component={Dashboard} />
          <Authenticate path='/product-manager' exact component={ProductManager} />
          <Authenticate path='/collections' exact component={CollectionManager} />
          <Authenticate path='/user-manager' exact component={UserManager} />
          <section className="section" id="footer"> 
            &copy; 2020 &nbsp; <Link  style={{color: '#f7f7f7'}} to="https//sechibueze.github.io" target="_blank" rel="noreferrer noopener">Samuel Chibueze</Link>
          </section>

        </Router>
      </Provider>
    </div>
  );
}

export default App;
