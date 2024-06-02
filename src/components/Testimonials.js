import React from 'react';
import './Testimonials.css';

const testimonialsData = [
  {
    image: `${process.env.PUBLIC_URL}/assets/greeksalad.jpg`,
    name: 'Johnny',
    rating: '5.0',
    description: 'Awesome service!',
  },
  {
    image: `${process.env.PUBLIC_URL}/assets/greeksalad.jpg`,
    name: 'Whitney',
    rating: '5.0',
    description: 'Great atmosphere for family and friends.',
  },
  {
    image: `${process.env.PUBLIC_URL}/assets/greeksalad.jpg`,
    name: 'Karen',
    rating: '4.9',
    description: 'Delicious!',
  },
  {
    image: `${process.env.PUBLIC_URL}/assets/greeksalad.jpg`,
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
            <img src={testimonial.image} alt={testimonial.title} className="testimonial-image" />
            <div className="testimonial-details">
              <div className="rating">
                <p className="rating-label">Rating:</p>
                <img src={`${process.env.PUBLIC_URL}/assets/star.png`} alt="Star" className="star-icon" />
                <span className="rating-number">{testimonial.rating}</span>
              </div>
              <h3 className="submitter-name">{testimonial.name}</h3>
              <p className="actual-rating">Rating: {testimonial.rating}</p>
              <p className="testimonial-description">{testimonial.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
