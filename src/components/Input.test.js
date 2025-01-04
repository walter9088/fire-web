import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Input from './Input';

test('renders input with label', () => {
  render(<Input label="Username" type="text" value="" onChange={() => {}} />);
  const labelElement = screen.getByText(/Username/i);
  expect(labelElement).toBeInTheDocument();
});

test('updates value when input changes', () => {
  const handleChange = jest.fn();
  render(<Input label="Username" type="text" value="test" onChange={handleChange} />);
  const inputElement = screen.getByDisplayValue(/test/i);
  expect(inputElement).toBeInTheDocument();
});