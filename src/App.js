import React from 'react'
import './App.css';
import Top from './Top';
import Header from './Header';
import About from './About';
import Donate from './Donate';
import Contact from './Contact';
import Join from './Join';

function App() {
  return (
    //BEM
    <React.Fragment>
      <Header />
      <Top />
      <About />
      <div className="final">
      <Donate />
      <Contact />
      </div>
      <Join />
    </React.Fragment>
  );
}

export default App;
