import { render, screen } from '@testing-library/react';
import App from './App.js';

beforeEach(() => {
  // Mock IntersectionObserver
  global.IntersectionObserver = class IntersectionObserver {
    constructor() {}

    observe() {
      return null;
    }

    unobserve() {
      return null;
    }

    disconnect() {
      return null;
    }
  };
});

test('renders correctly', () => {
  render(<App />);
  const linkElement = screen.getAllByText(/Jonathan Shih/i);
  expect(linkElement.length).toBeGreaterThanOrEqual(1);
});
