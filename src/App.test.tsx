import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('App tsx Tests', () => {

  test('should find Student list link', () => {
    const { getByText } = render(<App />);

    const linkElement = getByText(/Student List/i);
    expect(linkElement).toBeDefined();
    
    //TODO add Create Student Link test
  })

})