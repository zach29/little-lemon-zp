import React from 'react';
import './About.css';

function About() {
  return (
    <section className="about-section">
      <div className="about-content-wrapper">
        <div className="about-content">
          <h1 className="about-title">Little Lemon</h1>
          <h2 className="about-subtitle">Chicago</h2>
          <p className="about-text">We are a family owned Mediterranean restaurant, located in the heart of downtown Chicago. </p>
        </div>
        <div className="about-images">
        <img src={`${process.env.PUBLIC_URL}/assets/about1.jpg`} alt="About" />
        <img src={`${process.env.PUBLIC_URL}/assets/about2.jpg`} alt="About" />
        </div>
      </div>
    </section>
  );
}

export default About;