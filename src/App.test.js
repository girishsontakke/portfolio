import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const {findByText} = render(<App />);
  const linkElement = findByText(/learn react/i);
  expect(linkElement).not.toBeVisible;
});
