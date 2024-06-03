import React from 'react';
import './Testimonials.css';

const testimonialsData = [
  {
    name: 'Johnny',
    rating: '5.0',
    description: 'Awesome service!',
  },
  {
    name: 'Whitney',
    rating: '5.0',
    description: 'Great atmosphere for family and friends.',
  },
  {
    name: 'Karen',
    rating: '4.9',
    description: 'Delicious!',
  },
  {
    name: 'Cybil',
    rating: '5.0',
    description: '10/10 will eat here again',
  },
];

function Testimonials() {
  return (
    <section className="testimonials-section">
      <div className="testimonials-header">
        <h2 className="testimonials-title">Testimonials</h2>
      </div>
      <div className="testimonial-cards">
        {testimonialsData.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <div className="testimonial-details">
              <div className="rating">
                <span className="rating-label">Rating:</span>
                <img src={`${process.env.PUBLIC_URL}/assets/star.jpg`} alt="Star" className="star-icon" />
              </div>
              <div className="submitter-info">
                <span className="submitter-name">{testimonial.name}</span>
                <span className="actual-rating">{testimonial.rating}</span>
              </div>
              <p className="testimonial-description">{testimonial.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;

