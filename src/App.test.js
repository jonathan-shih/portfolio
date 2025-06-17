import { render, screen } from '@testing-library/react';
import App from './App';

test('renders correctly', () => {
  render(<App />);
  const linkElement = screen.getAllByText(/Jonathan Shih/i);
  expect(linkElement.length).toBeGreaterThanOrEqual(1);
});
