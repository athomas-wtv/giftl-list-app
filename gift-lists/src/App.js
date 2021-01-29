import Header from './components/main/Header'
import React from 'react';
import Home from './components/main/Home'

function App() {
  return (
    <React.Fragment>
      <Header title="Gift List"></Header>
      <Home></Home>
    </React.Fragment>
  );
}

export default App;
