import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Slider from './Components/Slider/Slider';
import Navbar from './Components/Navbar/Navbar';


import About from './Components/About/About';
import Portfolio from './Components/Portfolio/Portfolio';
import Contact from './Components/Contact/Contact';


import './App.css';


function App() {
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <Navbar />
        <Switch>
          <Route exact path="/"><Slider/></Route>
          <Route path="/about"><About/></Route>
          <Route path="/portfolio"><Portfolio/></Route>
          <Route path="/contact"><Contact/></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
