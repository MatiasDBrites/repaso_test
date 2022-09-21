import { render, screen } from '@testing-library/react';
import App from '../App'
import React from "react"

test('Renderizar App y que contenga "Sobre mi..."', () => {
  render(<App />);
  const linkElement = screen.getByText(/Sobre mi.../i);
  expect(linkElement).toBeInTheDocument();
});
