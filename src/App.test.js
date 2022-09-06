import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn testing link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn testing/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders component1 in the document', () => {
  const component=render(<App />);
  const childElement = component.getByText(/We will Test the Login Form Component/i);
  expect(childElement).toBeInTheDocument(); 
});

test('rechecking rendering component1 in the document', () => {
  const component=render(<App />);
  const childElement = component.getByPlaceholderText(/email/i);
  expect(childElement).toBeInTheDocument(); 
});

test('renders component2 in the document', () => {
  const component=render(<App />);
  const childElement = component.getByText(/2nd component/i);
  expect(childElement).toBeInTheDocument(); 
});