/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../app/page';

describe('Home', () => {
  it('renderiza o logo Next.js', () => {
    render(<Home />);
    
    const logo = screen.getByAltText('Next.js logo');
    expect(logo).toBeInTheDocument();
  });
  
  it('renderiza o texto Get started', () => {
    render(<Home />);
    
    const text = screen.getByText(/Get started by editing/i);
    expect(text).toBeInTheDocument();
  });
});