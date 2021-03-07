import React , {Component}from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './contents/Home';
// import About from './contents/about';
import Education from './contents/Education';
import Skills from './contents/Skills';
import Contact from './contents/Contact';
// import progressBar from 'react-bootstrap/ProgressBar';
class  App extends Component {
  render(){
    return(
      <Router>
        <div className="App">
          
          <Navbar/>
          <Route exact path="/">
          <Home />
          </Route>
          {/* <Route path="/about">
            <About/>
          </Route> */}
          <Route path="/education">
            <Education/>
          </Route>
          <Route path="/Skills">
            <Skills/>
          </Route>
        <Route path="/Contact">
            <Contact/>
          </Route>
        </div>
      </Router>
    );
  }
  
  
}

export default App;