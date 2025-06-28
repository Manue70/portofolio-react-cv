import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark sticky-top'>
      <div className='container'>
        <Link className='navbar-brand' to='/'>JOHN DOE</Link>
      
        
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav ms-auto'>
            <li className='nav-item'><Link className='nav-link' to='/home'>HOME</Link></li>
            <li className='nav-item'><Link className='nav-link' to='/services'>SERVICES</Link></li>
            <li className='nav-item'><Link className='nav-link' to='/portofolio'>PORTOFOLIO</Link></li>
            <li className='nav-item'><Link className='nav-link' to='/contact'>CONTACT</Link></li>
            <li className='nav-item'><Link className='nav-link' to='/mentions légales'>MENTIONS LEGALES</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}


export default Navbar;
