import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import nav_und from '../../assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
  const [menu, Setmenu] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMenu = () => {
    setMobileOpen(!mobileOpen);
  };

  const closeMenu = () => {
    setMobileOpen(false);
  };

  return (
    <div id="navbar" className='navbar'>
      <AnchorLink className='anchor-link' offset={15} href='#about'>
        <img onClick={() => Setmenu("about")} src={logo} alt="Logo" />
      </AnchorLink>

      {/* Hamburger icon */}
      <div className='hamburger' onClick={toggleMenu}>
        {mobileOpen ? <FaTimes size={24} color="#fff" /> : <FaBars size={24} color="#fff" />}
      </div>

      {/* Desktop & Mobile menu */}
      <ul className={`nav-menu ${mobileOpen ? 'mobile-menu-open' : ''}`}>
        {["home", "about", "services", "portfolio", "contact"].map((item) => (
          <li key={item}>
            <AnchorLink
              className='anchor-link'
              offset={15}
              href={`#${item}`}
              onClick={() => {
                Setmenu(item);
                closeMenu();
              }}
            >
              <p>{item.charAt(0).toUpperCase() + item.slice(1)}</p>
            </AnchorLink>
            {menu === item ? <img src={nav_und} alt="" /> : null}
          </li>
        ))}
      </ul>

      <AnchorLink className='anchor-link' offset={15} href='#contact'>
        <div className="nav-connect">Connect With Me</div>
      </AnchorLink>
    </div>
  );
};

export default Navbar;
