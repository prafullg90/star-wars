import { render, screen } from '@testing-library/react';
import Home from '../pages/index';
import '@testing-library/jest-dom';

describe('Home', () => {
  it('renders a searchbar', () => {
    render(<Home />);

    const span = screen.getByRole('textbox', {
      name: /searchbar/i,
    });

    expect(span).toBeInTheDocument();
  });
});
