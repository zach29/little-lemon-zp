// src/components/__tests__/BookTableForm.test.js
import { render, screen } from '@testing-library/react';
import BookTableForm from '../BookTableForm';
import { initializeTimes, updateTimes } from '../BookTableForm';

// Test for static text rendering in BookingForm component
test('Renders the BookingForm heading', () => {
  render(<BookTableForm availableTimes={[]} dispatch={() => {}} />);
  const headingElement = screen.getByText("Book a Table");
  expect(headingElement).toBeInTheDocument();
});

// Test for initializeTimes function
test('initializeTimes returns expected initial times', () => {
  const initialTimes = initializeTimes();
  expect(initialTimes).toEqual(['10:00 AM', '12:00 PM', '2:00 PM', '4:00 PM']);
});

// Test for updateTimes function
test('updateTimes returns updated times based on selected date', () => {
  const state = ['10:00 AM', '12:00 PM', '2:00 PM', '4:00 PM'];
  const updatedTimes = updateTimes(state, '2024-06-18'); // Replace '2024-06-18' with actual date
  expect(updatedTimes).toEqual(state); // Placeholder assertion, adjust based on actual logic
});
