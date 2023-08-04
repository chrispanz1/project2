import React from 'react'

import {useState} from 'react';
import axios, { Axios } from 'axios';
import Page from './Page';





function Main() {
    const [country,setCountry]=useState('default')
  const[official,setOfficial]=useState('default')
  const[capital,setCapital]=useState('default')
  const[population,setPopulation]=useState('default')
  const[region,setRegion]=useState('default')
  //utilize hooks//
  
  

  const receiveCountry=()=>{
    axios.get('https://restcountries.com/v3.1/all')
    .then(res=>{
      console.log(res);
      //ok so now we display the information from our api!, since there are roughly 190 nations we will generate a random number!//
      let random = Math.floor(Math.random()*(190-1)+1)
      setCountry(res.data[random].name.common)
      setOfficial(res.data[random].name.official)
      setCapital(res.data[random].capital)
      setPopulation(res.data[random].population.toLocaleString())
      setRegion(res.data[random].region)
    
      
      
 
    }).catch(err=>{
      console.log(err)

    })
  }
  return (
    <div>
        
        <div className="App">
      <Page />
     <button onClick={receiveCountry}>country!</button>
    <p>COUNTRY {country}</p>
    <p>official {official}</p>
    <p>capital:{capital}</p>
    <p>Population is {population} people</p>
    <p>Region of world:{region}</p>
    </div>
    <div className='parentDiv'>
      <div className='leftDiv'>
      <img src="https://media.licdn.com/dms/image/D4E35AQHEfXvLI_PAJA/profile-framedphoto-shrink_400_400/0/1690578525293?e=1691553600&v=beta&t=bzjG0osRcPe607VwGnJJFVrlO4-QkmMNMfZ-mBS0AP8" alt="" class="pic" />
      </div>
      <div className='rightDiv'>
        <h1>welcome</h1>
        <h3>Hi, my name is chris I am an aspiring web developer,problem solver and software engineer. I have a strong understanding of the mern stack and all of its nuances This is my portfolio page which shows my personal and professional projects along with my resume and a link to my git hub I am proud of my projects Ive build and I will display them on the about page!</h3>
        <h4> Above I have included a sneak peak of one of my projects, nation schola it uses an api to show information on world nations!</h4>
        <h5>I am passionate about geography and I have tried to integrate this passion into my code.</h5>
      </div>
     
      
    </div>
    </div>
      
    
    
  )
}

export default Main