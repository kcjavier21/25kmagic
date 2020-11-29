import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar.jsx';
import Home from './components/pgs/Home.jsx';

import Services from './components/pgs/Services';

import SignIn from './components/SignIn/Form';
import SignUp from './components/SignUp/Form';
import UserProfile from './components/pgs/UserProfile';

function App() {
  return (
    // <QRGenerator/>
    <React.Fragment>
      <Router>
        <Navbar />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/services' component={Services} />
            <Route path='/sign-in' component={SignIn} />
            <Route path='/sign-up' component={SignUp} />
            <Route path='/user-profile' component={UserProfile} />
          </Switch>
      </Router>
    </React.Fragment>
    
  );
}

export default App;
