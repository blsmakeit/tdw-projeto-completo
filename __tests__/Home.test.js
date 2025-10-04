import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../app/page';
import About from '../app/about/page';

describe('Home', () => {
  it('renderiza sem erros', () => {
    const { container } = render(<Home />);
    expect(container).toBeInTheDocument();
  });

  it('renderiza o texto Welcome', () => {
    render(<Home />);

    // Mudaste o texto, então o teste tem de procurar o texto novo
    const text = screen.getByText(/Welcome to my react app/i);
    expect(text).toBeInTheDocument();
  });

  it('corresponde ao snapshot', () => {
    const { container } = render(<Home />);
    expect(container).toMatchSnapshot();
  });
});

describe('About', () => {
  it('corresponde ao snapshot', () => {
    const { container } = render(<About />);
    expect(container).toMatchSnapshot();
  });
});
