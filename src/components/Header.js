import React from "react"
import FoodFireLogo from '../Images/Food Fire Logo.png'
import { ShoppingCart } from "react-feather"

//Title Component
const Title=()=>{
    return(
    <a href="/">
      <img className='logo' src={FoodFireLogo} alt="Food Fire logo"/>
      </a>
    )
  }
  
  //Header Component
  const Header =()=>{
    return(
    <div className='header'>
      <Title/>
      <div className='nav-items'>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li><ShoppingCart/></li>
        </ul>
      </div>
    </div>
    )
  }

  export default Header