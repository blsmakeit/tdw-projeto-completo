import { render, screen } from '@testing-library/react';
import Home from '@/app/page';

describe('Home', () => {
  it('renderiza o título principal', () => {
    render(<Home />);
    
    const heading = screen.getByRole('heading', {
      name: /Next.js/i,
    });
    
    expect(heading).toBeInTheDocument();
  });
});