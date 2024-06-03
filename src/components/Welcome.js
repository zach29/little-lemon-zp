import React from 'react';
import './Welcome.css';

function Welcome() {
  return (
    <section className="welcome-section">
      <div className="welcome-content-wrapper">
        <div className="welcome-content">
          <h1 className="welcome-title">Little Lemon</h1>
          <h2 className="welcome-subtitle">Chicago</h2>
          <p className="welcome-text">We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist. </p>
          <a href="/reserve" className="welcome-button">Reserve a Table</a>
        </div>
        <div className="welcome-image">
          <img src={`${process.env.PUBLIC_URL}/assets/welcome-image.jpg`} alt="Welcome" />
        </div>
      </div>
    </section>
  );
}

export default Welcome;