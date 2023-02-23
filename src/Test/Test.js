const axios = require('axios');
test('should return data from the API', async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
  expect(response.status).toBe(200); // verifica que el estado de la respuesta sea 200, es decir, OK
  expect(response.data.userId).toBe(1); // verifica que la respuesta incluya los datos esperados
});
// sustituir evento, componente, nombre doc..
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import MyComponent from './MyComponent';
describe('MyComponent', () => {
  it('renders correctly', () => {
    const { getByText } = render(<MyComponent />);
    expect(getByText('Hello, World!')).toBeInTheDocument();
  });
  it('handles click events', () => {
    const handleClick = jest.fn();
    const { getByText } = render(<MyComponent onClick={handleClick} />);
    fireEvent.click(getByText('Click me'));
    expect(handleClick).toHaveBeenCalled();
  });
});