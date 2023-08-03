

import './App.css';
import {useState} from 'react';
import axios, { Axios } from 'axios';
import Page from './components/Page';
import { BrowserRouter as Router, Route,Switch} from 'react-router-dom'
import About from './components/About';
import { Routes } from 'react-router-dom';
import Main from './components/Main';


function App() {
 
  
   
  return (
    <Router>
    <div>
      
   
    </div>
    <switch>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/About" element={<About/>}/>
      
     
      </Routes>

    </switch>
    
    
    </Router>
  );
  }

export default App;
//added a component//
