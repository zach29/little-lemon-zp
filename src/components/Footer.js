import React from 'react';

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-column">
          <img src={`${process.env.PUBLIC_URL}/assets/footer-image.jpg`} alt="Little Lemon" />
        </div>
        <div className="footer-column">
          <h2>Navigation</h2>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h2>Details</h2>
          <p>Address: 123 Lemon St, Citrus City, CA 90210</p>
          <p>Phone: (123) 456-7890</p>
          <p>Email: info@littlelemon.com</p>
        </div>
        <div className="footer-column">
          <img src={`${process.env.PUBLIC_URL}/assets/logo.png`} alt="Little Lemon Logo" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
