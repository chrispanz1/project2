import React from 'react'
import { useNavigate } from 'react-router-dom'

function Nav() {
    const nav=useNavigate()
  return (
    <div className='aboutLink' onClick={()=>{
        nav("/about")
        
      }}>go to about page &#9734;
      
      </div>
      
  )
}

export default Nav