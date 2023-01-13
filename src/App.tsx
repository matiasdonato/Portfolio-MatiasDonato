import { Route } from 'react-router-dom';
import Home from './components/Home';
import React from 'react';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Nav from './components/Nav';
import "./css/app.css"
import { useSelector } from 'react-redux';

function App() {

  interface AppState{
    lenguage : string
    mode: string
}

  let {lenguage, mode} = useSelector((state: AppState) => state)

  return (
    <div className='appContainer' id={mode}>
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
