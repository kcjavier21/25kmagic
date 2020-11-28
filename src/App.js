import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import Navbar from './components/Navbar.jsx';
import QRGenerator from './components/qrGenerator.jsx';

import Home from './components/pgs/Home.jsx';


function App() {
  return (
    // <QRGenerator/>
    <React.Fragment>
      <Router>
        <Navbar />
          <Switch>
            <Route path='/' exact component={Home} />
          </Switch>
      </Router>
    </React.Fragment>
    
  );
}

export default App;
