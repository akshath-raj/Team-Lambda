import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import LambdaLogo from '../Assets/Images/LambdaLogo.png';

const Navbar = () => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <div className="navbar">
      <div className="navbar-inner">
        <img src={LambdaLogo} alt="logo" className="logo" />
        <ul className="navbar-menu">
          <li className={path === '/' ? 'active' : ''}>
            <Link to="/">Home</Link>
          </li>
          <li className={path === '/products' ? 'active' : ''}>
            <Link to="/products">Products</Link>
          </li>
          <li className={path === '/about-us' ? 'active' : ''}>
            <Link to="/about-us">About Us</Link>
          </li>
          <li className={path === '/contact-us' ? 'active' : ''}>
            <Link to="/contact-us">Contact Us</Link>
          </li>
        </ul>
        <span className="navbar-brand">Team Lambda</span>
      </div>
    </div>
  );
};

export default Navbar;
