// src/components/__tests__/BookTableForm.test.js
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import BookTableForm from '../BookTableForm';

// Mock submitForm function
const mockSubmitForm = jest.fn();

const availableTimes = ['10:00 AM', '12:00 PM', '2:00 PM', '4:00 PM'];

describe('BookTableForm Component', () => {
  beforeEach(() => {
    render(<BookTableForm availableTimes={availableTimes} dispatch={() => {}} submitForm={mockSubmitForm} />);
  });

  test('renders form inputs correctly', () => {
    const nameInput = screen.getByLabelText(/name/i);
    const emailInput = screen.getByLabelText(/email/i);
    const phoneInput = screen.getByLabelText(/phone/i);
    const dateInput = screen.getByLabelText(/date/i);
    const timeSelect = screen.getByLabelText(/time/i);
    const guestsInput = screen.getByLabelText(/number of guests/i);
    const occasionSelect = screen.getByLabelText(/occasion/i);
    const submitButton = screen.getByText(/submit/i);

    expect(nameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(phoneInput).toBeInTheDocument();
    expect(dateInput).toBeInTheDocument();
    expect(timeSelect).toBeInTheDocument();
    expect(guestsInput).toBeInTheDocument();
    expect(occasionSelect).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  test('validates form input and submits form', async () => {
    const nameInput = screen.getByLabelText(/name/i);
    const emailInput = screen.getByLabelText(/email/i);
    const phoneInput = screen.getByLabelText(/phone/i);
    const dateInput = screen.getByLabelText(/date/i);
    const timeSelect = screen.getByLabelText(/time/i);
    const guestsInput = screen.getByLabelText(/number of guests/i);
    const occasionSelect = screen.getByLabelText(/occasion/i);
    const submitButton = screen.getByText(/submit/i);

    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
    fireEvent.change(phoneInput, { target: { value: '1234567890' } });
    fireEvent.change(dateInput, { target: { value: '2023-06-18' } });
    fireEvent.change(timeSelect, { target: { value: '12:00 PM' } });
    fireEvent.change(guestsInput, { target: { value: '2' } });
    fireEvent.change(occasionSelect, { target: { value: 'Anniversary' } });

    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(mockSubmitForm).toHaveBeenCalledWith({
        name: 'John Doe',
        email: 'john@example.com',
        phone: '1234567890',
        date: '2023-06-18',
        time: '12:00 PM',
        guests: '2',
        occasion: 'Anniversary',
      });
    });

    expect(mockSubmitForm).toHaveBeenCalledTimes(1);
  });

  test('shows validation errors for empty fields', async () => {
    const submitButton = screen.getByText(/submit/i);

    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText(/name is required/i)).toBeInTheDocument();
      expect(screen.getByText(/email is required/i)).toBeInTheDocument();
      expect(screen.getByText(/phone is required/i)).toBeInTheDocument();
      expect(screen.getByText(/date is required/i)).toBeInTheDocument();
      expect(screen.getByText(/time is required/i)).toBeInTheDocument();
      expect(screen.getByText(/number of guests is required/i)).toBeInTheDocument();
      expect(screen.getByText(/occasion is required/i)).toBeInTheDocument();
    });
  });
});
