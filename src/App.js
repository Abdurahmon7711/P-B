import React, { useState, useEffect } from 'react';
import { ArrowUp } from './components/ArrowUp';
import './App.css';
// import Nav from './components/Nav'
import Home from './components/Home';
import About from './components/About';
import WhatiDo from './components/WhatiDo';
import Awesome from './components/Awesome';
import Feedbacke from './components/Feedbacke';
import Counter from './components/Counter';
import Team from './components/Team';
import Halpefool from './components/Halpefool';
import Partner from './components/Partner';
import Contacts from './components/Contacts';
import Navbar from './ex/NavBar/Navbar';
  

function App() {
  
  return (
    <div className="App">
      <div className="N-and-H">
        <Home />
      </div>
      <About />
      <WhatiDo />
      <Awesome />
      <Feedbacke />
      <Counter />
      <Team />
      <Halpefool />
      <Partner />
      <Contacts />
      <Navbar/>
      <ArrowUp />
    </div>
  );
}

export default App;
// <Jgalary/>