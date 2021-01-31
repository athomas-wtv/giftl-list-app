import Header from './components/main/Header'
import React from 'react';
import Home from './components/pages/Home'
import Login from './components/pages/Login'
import {BrowserRouter as Router, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      {/* <Header title="Gift List"></Header> */}
        <Route path="/home" component={Home} />
        <Route path="/login" component={Login} />
      </Router>
  );
}

export default App;
