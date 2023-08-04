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
      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJwAAACcCAMAAAC9ZjJ/AAAAkFBMVEXw208yMzDy4XHw2krx3Fby4GsnKi8uMDD951J3cDr34VDy3U8qLC+zpUMkKC8sLi8cIS4hJS7p1U7k0E03NzGNgz0SGi3GtkeUiT5lXzdJRzO+r0abjz/Vw0pzbDnLukgMFi1CQTKkl0GAdztfWjZYVDXcyUtsZTgAACxTTzQAEC305Yg+PTIACy2GfTysnkJt1NG5AAAF+UlEQVR4nO2a23aqOhSGYa29E8zkFECkclBBtHa3+v5vt6PWSkLANu0Ivcg/vKqkfM4k85RYf36v/rP+/l79a/1eGThVGThVGThVGThVGThVGThVGThVGThVGThVGThVGThVGThVGThVGThVGThVGThVGThVGThVGThVGThVGThVGThVGThVGThVGThVGThVGThVGThVGThVGThVGThVGThVGThVTQEHd40/+GNwhNPwW4EQK97tSqZdHAEZA/wpOPA4LQZeCY7lZVW7wcj3cXJ4auqSOIN4PwXnUB/dFVbSh4i12Nu+jwKMbSaMXeS7myIest6PwV3f9y40kzwCJN+nfvexi3CazCMyMRzEjYtEsiseXebSVaoNjpR2KEU7K3jLZFOrC44sEneQjYk2EjpNcGTx0ltsvNKqT6cHDnabYJzNtsOityu0wIG19R+xMdt5Ip0WOOKtH7PZAYqEidUBB9HrgwV3lV9ZPJ0OOHLqTapLQ4pE4nC50w4H1p53vhjhdp7N96+o+/eAVhNMK+wCzkYYZ7HjEPbJ93e/HB4WvSihAY54KWe4lxsFEKt43yluOo/78VUDnNNQbmWdnI+v4H05httSljjpgGu7gSto4w4GkGNqo7danpbogOMcCTpyHACHtNoNZM464OzuV74QpWBRD2bqOjbEKJw1UubosFwyMq2j0gHHZST8hpgejg8QYe0M/pcJ4Oacn8PhargY1A4HOR8hmO2sz607LbFVKLpwWEkDwiRwYlbCvk+r0hrpWeiDs0jdT9IpqnJ4hKclE44TSSaM3KUXjfeZtNQQTpH24ZjLS5OsHLOenuorWsorakyTqhzugmmqW1eDZStaP60m7jKR+m2IzvZxFck9i65eiZPRQTpmPXkTTBccQPE8Urym7UoScbW1wMA52fL23EVBKGmCaexskvKQjhmvEctWnXDMo2R4pKFDD6LtdMKxqS1n/vDc0n2kv1fSxYNVG/aaJB90QgqvGe5qvSQcwHvmW3Ta4djGgF1GU2nIwAeuwJgA7nLE5G0DmVcOi8nhLj2cxX7d37rBa7d/OBHceWuQ3Szp4b3knVU3GdyZj5SV6JbRvhPGpoQ7m88Tzk7wpuPrpoVj48oNT5eUvwfOIjk/r27H1ek80hwY2XC7wq8ngANngI4suBMUWnwXrp96OdzPRzPhASBxhnZSOoi4DJ5m31tzZw9VCi9yuJ+PGv5rQk6b0K8G2kvrH4QjLC1LZ0LzNObe4B+7cCwVOVAWS9e1rFCAmLfcd6YVSN6u8fkwgQPOuWPobm+VpSFNeHUXKJfQCccUVH1DsBmt0PlNwZLLH6Dhckj04Q8AosK+rcfA7Z/SgLUN5EO/Ckei4pZM0H1n90HJnwuiFdxenb92IhSmJ2EvAcmE+LpSW3PgLNp7mkibW5eIxXDhsDd4j0EQb33OLtitok77geVOGeUPxhTDF5TNc/dN4TKPLneDolXL52bu9mNfLsWSwQ+PZXy7VBR7S+HKBKrUAj8cxH/kPx3rU318CgSC9GNRE6+fUoa4bQovz71idgjFBo9qygT9FwWIUorEjBsH981CjpLbJAHyQybq9nL1YKOYbELUPrzicBHtuGCw8Oh9EkFhrZqmk/Iz9wiY5TobzoKVPVLmCwoOkXIN4WTDN37uojPBP0vbmlIJrv1LcBDtRxpZt1+PhfMjchoqU0WF8+8U1WC1D+n6MYrkwafWXXoUPPRXw1fcPpjZN0l0Jyv7scXtde8201cDP0AzNknYlR67EavxHxgPBfX3b0cA1OFgoyikA5c1AfLlesQR4XTZzwkU8jmW1FY2lVgP0+Q4cL/ROuebdYtkw85W85diQqAId0keZyjlG1kYrdFxNXpeRKx85r5Q/gYMG5imT178g9ciWZbm7TeJS6/yg2RTPTorupzmR4vj4dW+jaM+TpbVKR465letvoA4UenVxZypqPMych4fAl6HkXjFxmVsXFaf8tIaGfiN0pClcSzruXxG70kPjns40FycV5WBU5WBU5WBU5WBUxWD++f36s//tslvYo96Jg4AAAAASUVORK5CYII=" alt="" class="pic5" />
      
    </div>
    </div>
      
    
    
  )
}

export default Main