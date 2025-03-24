import { useState } from 'react';
import './App.css';
import Home from './Components/Home';
import Products from './Components/Products';
import User from './Components/User';
import Navbar from './Components/Navbar';
import Card from './Components/Card';
import Login from './Components/Login';
import Button from './Components/Button';
import Api_Products from './Components/Api_Products';
import Feedback from './Components/Feedback';



function App() {
  return (
    <>
      <Navbar />
      <Login />
      <User name="2300033051" role="Student" />
      <h1>AgriBzar</h1>
      <Home />
      <Button />
      <Products />
      <Card />
      <Api_Products />
      <Feedback />
    
    </>
  );
}

export default App;
