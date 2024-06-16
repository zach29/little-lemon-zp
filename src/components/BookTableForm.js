// src/components/BookTableForm.js
import React, { useState, useReducer, useEffect } from 'react';
import './BookTableForm.css';

// Reducer function for managing state updates
function reducer(state, action) {
  switch (action.type) {
    case 'INITIALIZE_TIMES':
      return initializeTimes();
    case 'UPDATE_TIMES':
      return updateTimes(state, action.date);
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

// Function to initialize times (mock implementation)
function initializeTimes() {
  return ['10:00 AM', '12:00 PM', '2:00 PM', '4:00 PM'];
}

// Function to update times based on selected date (mock implementation)
function updateTimes(state, selectedDate) {
  return state;
}

function BookTableForm({ availableTimes, dispatch, submitForm }) {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '',
    occasion: ''
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    dispatch({ type: 'INITIALIZE_TIMES' });
  }, [dispatch]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });

    if (name === 'date') {
      dispatch({ type: 'UPDATE_TIMES', date: value });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formState.name) newErrors.name = 'Name is required';
    if (!formState.email) newErrors.email = 'Email is required';
    if (!formState.phone) newErrors.phone = 'Phone is required';
    if (!formState.date) newErrors.date = 'Date is required';
    if (!formState.time) newErrors.time = 'Time is required';
    if (!formState.guests) newErrors.guests = 'Number of guests is required';
    if (!formState.occasion) newErrors.occasion = 'Occasion is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      submitForm(formState);
    }
  };

  return (
    <div className="book-table-form-container">
      <h2>Book a Table</h2>
      <form className="book-table-form" onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formState.name} onChange={handleChange} required />
          {errors.name && <span className="error-message">{errors.name}</span>}
        </label>
        <label>
          Email:
          <input type="email" name="email" value={formState.email} onChange={handleChange} required />
          {errors.email && <span className="error-message">{errors.email}</span>}
        </label>
        <label>
          Phone:
          <input type="tel" name="phone" value={formState.phone} onChange={handleChange} required />
          {errors.phone && <span className="error-message">{errors.phone}</span>}
        </label>
        <label>
          Date:
          <input type="date" name="date" value={formState.date} onChange={handleChange} required />
          {errors.date && <span className="error-message">{errors.date}</span>}
        </label>
        <label>
          Time:
          <select name="time" value={formState.time} onChange={handleChange} required>
            <option value="">Select a Time</option>
            {availableTimes.map((time) => (
              <option key={time} value={time}>{time}</option>
            ))}
          </select>
          {errors.time && <span className="error-message">{errors.time}</span>}
        </label>
        <label>
          Number of Guests:
          <input type="number" name="guests" value={formState.guests} min="1" onChange={handleChange} required />
          {errors.guests && <span className="error-message">{errors.guests}</span>}
        </label>
        <label>
          Occasion:
          <select name="occasion" value={formState.occasion} onChange={handleChange} required>
            <option value="">Select an Occasion</option>
            <option value="Anniversary">Anniversary</option>
            <option value="Birthday">Birthday</option>
            <option value="Graduation">Graduation</option>
            <option value="Other">Other</option>
          </select>
          {errors.occasion && <span className="error-message">{errors.occasion}</span>}
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default BookTableForm;