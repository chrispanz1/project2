

import './App.css';
import React, {useState} from 'react';
import axios from 'axios';
import Page from './components/Page';
import About from './components/About';
import {Route, Routes} from 'react-router-dom';
import Main from './components/Main';
import Nav from './components/Nav';
//import About from './components/About';



function App() {
  
//test//
//test//

  
   
  return (
    <div>
    <Nav />
    <Routes>
      <Route path="/about" element={<About />}/>
      <Route path="/" element={<Main />}/>
    </Routes>
    </div>
  );
  }

export default App;
//added a component//
