import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import Navbar from './components/Navbar.jsx';
import QRGenerator from './components/qrGenerator.jsx';
import Services from './components/pgs/Services';
import ContactUs from './components/pgs/ContactUs';
import SignIn from './components/pgs/SignIn';

import Home from './components/pgs/Home.jsx';


function App() {
  return (
    // <QRGenerator/>
    <React.Fragment>
      <Router>
        <Navbar />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/services' component={Services} />
            <Route path='/contact-us' component={ContactUs} />
            <Route path='/sign-in' component={SignIn} />
          </Switch>
      </Router>
    </React.Fragment>
    
  );
}

export default App;
