import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Button from './Button';

test('renders button with text', () => {
  render(<Button>Click Me</Button>);
  const buttonElement = screen.getByText(/Click Me/i);
  expect(buttonElement).toBeInTheDocument();
});

test('calls onClick handler when clicked', () => {
  const handleClick = jest.fn();
  render(<Button onClick={handleClick}>Click Me</Button>);
  const buttonElement = screen.getByText(/Click Me/i);
  buttonElement.click();
  expect(handleClick).toHaveBeenCalledTimes(1);
});