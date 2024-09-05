import React from 'react'
import { NavLink } from 'react-router-dom'

const MyNavLinks = () => {
  return (
    <div>
        
      <NavLink to="/"style={{color:"green", marginRight:"20px"}}>Home</NavLink>
      <NavLink to="/about"style={{marginRight:"20px"}}>About</NavLink>
      <NavLink to="/contact"style={{marginRight:"20px"}}>Contact</NavLink>
      <NavLink to="/college"style={{marginRight:"20px"}}>College</NavLink>
      <NavLink to ="/product/create" style={{marginRight:"20px"}}>ProductCreate</NavLink>
      <NavLink to ="/product" style={{marginRight:"20px"}}> Product</NavLink>
    </div>  
      

  )
}

export default MyNavLinks
