import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pgs/Home';
import SignIn from './components/SignIn/Form';
import SignUp from './components/SignUp/Form';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Navbar />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/sign-in' component={SignIn} />
            <Route path='/sign-up' component={SignUp} />
          </Switch>
      </Router>
    </>
  );
}

export default App;
