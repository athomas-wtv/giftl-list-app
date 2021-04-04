import Header from './components/main/Header'
import React from 'react';
import Home from './components/pages/Home'
import Login from './components/pages/Login'
import CreateAccount from './components/pages/CreateAccount'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import CreateList from './components/pages/CreateList';

function App() {
  return (
    <Router>
      {/* <Header title="Gift List"></Header> */}
      <Switch>
        <Route path="/register" component={CreateAccount} />
        <Route path="/create" component={CreateList} />
        <Route path="/login" component={Login} />
        <Route path="/" component={Home} />
      </Switch>
      </Router>
  );
}

export default App;
