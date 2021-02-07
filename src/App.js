import './App.css';
import Top from './Top';
import Header from './Header';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import About from './About';
import Donate from './Donate';
import Contact from './Contact';

function App() {
  return (
    //BEM
    <Router>
      <div className="App">        
      <Header />
         <Switch>
           <Route exact path="/">
             <Top /> 
             <About />
             <Donate />
             <Contact />
           </Route>
         </Switch>
      </div>
    </Router>
  );
}

export default App;
