import React, { useState, useReducer, useEffect } from 'react';
import './BookTableForm.css';

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

function initializeTimes() {
  return ['10:00 AM', '12:00 PM', '2:00 PM', '4:00 PM'];
}

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

  const [state, localDispatch] = useReducer(reducer, availableTimes);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    submitForm(formState);
  };

  return (
    <div className="book-table-form-container">
      <h2>Book a Table</h2>
      <form className="book-table-form" onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formState.name} onChange={handleChange} required />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={formState.email} onChange={handleChange} required />
        </label>
        <label>
          Phone:
          <input type="tel" name="phone" value={formState.phone} onChange={handleChange} required />
        </label>
        <label>
          Date:
          <input type="date" name="date" value={formState.date} onChange={handleChange} required />
        </label>
        <label>
          Time:
          <select name="time" value={formState.time} onChange={handleChange} required>
            <option value="">Select a Time</option>
            {availableTimes.map((time) => (
              <option key={time} value={time}>{time}</option>
            ))}
          </select>
        </label>
        <label>
          Number of Guests:
          <input type="number" name="guests" value={formState.guests} min="1" onChange={handleChange} required />
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
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default BookTableForm;



