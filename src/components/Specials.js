import React from 'react';
import './Specials.css';

const specialsData = [
  {
    image: `${process.env.PUBLIC_URL}/assets/greeksalad.jpg`,
    title: 'Greek Salad',
    price: '$12.99',
    description: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ',
  },
  {
    image: `${process.env.PUBLIC_URL}/assets/bruchetta.svg`,
    title: 'Bruchetta',
    price: '$6.99',
    description: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.',
  },
  {
    image: `${process.env.PUBLIC_URL}/assets/lemondessert.jpg`,
    title: 'Lemon Dessert',
    price: '$5.00',
    description: 'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.',
  },
];

function Specials() {
  return (
    <section className="specials-section">
      <div className="specials-header">
        <h2 className="specials-title">This Week's Specials!</h2>
        <a href="/menu" className="specials-button">Online Menu</a>
      </div>
      <div className="specials-cards">
        {specialsData.map((special, index) => (
          <div className="special-card" key={index}>
            <img src={special.image} alt={special.title} className="special-image" />
            <div className="special-details">
              <div className="special-header">
                <h3 className="special-title">{special.title}</h3>
                <span className="special-price">{special.price}</span>
              </div>
              <p className="special-description">{special.description}</p>
              <a href="/order" className="special-order">Order Delivery</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Specials;