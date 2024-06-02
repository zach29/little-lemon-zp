import React from 'react';
import Nav from './Nav';

function Header() {
  return (
    <header>
        <img src={`${process.env.PUBLIC_URL}/assets/logo.png`} alt="Little Lemon Logo" />
        <Nav />
    </header>
  );
}

export default Header;