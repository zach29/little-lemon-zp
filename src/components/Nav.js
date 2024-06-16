import React from 'react';
import {Link} from 'react-router-dom';


function Nav() {
  return (
    <nav>
      <ul>
        <Link to="/" className="nav-button">Home</Link>
        <li><a href="#about">About</a></li>
        <li><a href="#menu">Menu</a></li>
        <Link to="/book-table-page" className="nav-button">Reservations</Link>
        <li><a href="#contact">Order Online</a></li>
        <li><a href="#contact">Login</a></li>
      </ul>
    </nav>
  );
}

export default Nav;