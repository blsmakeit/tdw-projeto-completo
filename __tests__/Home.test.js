import { render, screen } from '@testing-library/react';
import Home from '@/app/page';

describe('Home', () => {
  it('renderiza o logo Next.js', () => {
    render(<Home />);

    const logo = screen.getByAltText(/Next.js logo/i);

    expect(logo).toBeInTheDocument();
  });
});
