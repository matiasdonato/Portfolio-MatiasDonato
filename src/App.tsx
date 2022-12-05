import { Route } from 'react-router-dom';
import Home from './components/Home';
import React from 'react';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Nav from './components/Nav';
import "./css/app.css"

function App() {
  return (
    <div className='appContainer' id='dark'>
      <Route path={"/"} render={()=> <Nav/> } />
      <Route exact path={"/"} render={()=> <Home/> } />
      <Route path={"/about"} render={()=> <AboutMe/> } />
      <Route path={"/skills"} render={()=> <Skills/> } />
      <Route path={"/projects"} render={()=> <Projects/> } />
      <Route path={"/contact"} render={()=> <Contact/> } />
    </div>
  );
}

export default App;
