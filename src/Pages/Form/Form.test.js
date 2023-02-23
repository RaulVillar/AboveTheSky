import React from 'react';
import { render, screen } from '@testing-library/react';
import Contacto from './contacto';

describe('Contacto component', () => {
  it('renders form with email input and message textarea', () => {
    render(<Contacto />);
    const emailInput = screen.getByPlaceholderText('Escribe tu Email aquí!.');
    const messageTextarea = screen.getByPlaceholderText('Escribe tu mensaje aquí!.');
    expect(emailInput).toBeInTheDocument();
    expect(messageTextarea).toBeInTheDocument();
  });

  it('renders a button with "Enviar" text', () => {
    render(<Contacto />);
    const submitButton = screen.getByText('Enviar');
    expect(submitButton).toBeInTheDocument();
  });
});
