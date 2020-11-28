import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pgs/Home';
import Services from './components/pgs/Services';
import ContactUs from './components/pgs/ContactUs';
import SignIn from './components/pgs/SignIn';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Navbar />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/services' component={Services} />
            <Route path='/contact-us' component={ContactUs} />
            <Route path='/sign-in' component={SignIn} />
          </Switch>
      </Router>
    </>
  );
}

export default App;
