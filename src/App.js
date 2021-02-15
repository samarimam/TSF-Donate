import React from 'react'
import './App.css';
import Top from './Top';
import Header from './Header';
import About from './About';
import Donate from './Donate';
import Contact from './Contact';

function App() {
  return (
    //BEM
    <React.Fragment>
      <Header />
      <Top />
      <About />
      <Donate />
      <Contact />
    </React.Fragment>
  );
}

export default App;
