import React, { useState } from 'react'
import './Navbar.css'
import  logo from '../../assets/logo.png'
import nav_und from '../../assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Navbar = () => {
  const [menu,Setmenu] = useState("home");
  return (
    <div id="navbar" className='navbar'>
      <AnchorLink className='anchor-link' offset = {15} href='#about'> <img src={logo} alt="" /></AnchorLink>
      <ul className='nav-menu'>
        <li> <AnchorLink className='anchor-link' href='#home'> <p onClick = {()=>Setmenu("home")}>Home</p></AnchorLink>{menu === "home"? <img src={nav_und} alt="" />:<></>}</li>
        <li> <AnchorLink className='anchor-link' offset = {15} href='#about'> <p onClick = {()=>Setmenu("about")}>About Me</p></AnchorLink>{menu === "about"? <img src={nav_und} alt="" />:<></>}</li>
        <li> <AnchorLink className='anchor-link' offset = {15} href='#services'> <p onClick = {()=>Setmenu("services")}>Services</p></AnchorLink>{menu === "services"? <img src={nav_und} alt="" />:<></>}</li>
        <li> <AnchorLink className='anchor-link' offset = {15} href='#portfolio'> <p onClick = {()=>Setmenu("portfolio")}>Portfolio</p></AnchorLink>{menu === "portfolio"? <img src={nav_und} alt="" />:<></>}</li>
        <li> <AnchorLink className='anchor-link' offset = {15} href='#contact'> <p onClick = {()=>Setmenu("contact")}>Contact</p></AnchorLink>{menu === "contact"? <img src={nav_und} alt="" />:<></>}</li>
      </ul>
      <AnchorLink className='anchor-link' offset = {15} href='#contact'><div className="nav-connect">Connect With Me</div></AnchorLink>
    </div>
  )
}

export default Navbar
