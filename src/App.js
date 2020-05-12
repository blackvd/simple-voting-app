import React from 'react';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import Main from './components/MainComponent';

function App() {
  return (
    <div>
      <Navbar color="light">
        <NavbarBrand href="/">Voting app</NavbarBrand>
      </Navbar>
      <Main />
    </div>
  );
}

export default App;
