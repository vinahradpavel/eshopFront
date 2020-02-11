import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Body from './components/Body';

function App() {
  return (
    <div className="App">
    <Header text="this is header"/>
    <Body text="this is main/body"/>
    <Footer text="this is footer"/>
    </div>
  );
}

export default App;
