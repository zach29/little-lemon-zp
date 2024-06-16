import React from 'react';
import './BookTableForm.css';

function BookTableForm() {
  return (
    <div className="book-table-form-container">
      <h2>Book a Table</h2>
      <form className="book-table-form">
        <label>
          Name:
          <input type="text" name="name" required />
        </label>
        <label>
          Email:
          <input type="email" name="email" required />
        </label>
        <label>
          Phone:
          <input type="tel" name="phone" required />
        </label>
        <label>
          Date:
          <input type="date" name="date" required />
        </label>
        <label>
          Time:
          <input type="time" name="time" required />
        </label>
        <label>
          Number of Guests:
          <input type="number" name="guests" min="1" required />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default BookTableForm;
