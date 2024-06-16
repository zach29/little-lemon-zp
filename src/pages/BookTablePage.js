import React, { useReducer, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import BookTableForm from '../components/BookTableForm';
import './BookTablePage.css';

const initializeTimes = () => {
  return [
    '17:00', '18:00', '19:00', '20:00', '21:00'
  ];
};

const updateTimes = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      return initializeTimes();
    default:
      return state;
  }
};

function BookTablePage() {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Check if fetchAPI is defined and fallback to a mock function if not
    if (typeof window.fetchAPI !== 'function') {
      window.fetchAPI = async (formData) => {
        console.warn('Using mock fetchAPI function');
        return true; // Mock success response
      };
    }
  }, []);

  const submitForm = async (formData) => {
    const isSuccess = await window.fetchAPI(formData);
    if (isSuccess) {
      navigate('/booking-confirmed');
    } else {
      setErrorMessage('There was an error submitting your booking. Please try again.');
    }
  };

  return (
    <div className="book-table-page">
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      <BookTableForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />
    </div>
  );
}

export default BookTablePage;






