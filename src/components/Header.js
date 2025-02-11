
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
       <div id='logo'>
          Event Spotter
        </div>  
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/upload">Upload</Link></li>
          <li><Link to="/signup">Signup</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
