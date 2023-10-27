import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { Testimonials } from './pages/Testimonials';
import { Portfolio } from './pages/Portfolio';
import { Home } from './pages/Home';
import { AboutMe } from './pages/AboutMe';
import Contact from "./pages/Contact";

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
test('to check testimonials heading', () => {
  render(<Testimonials />);
  const linkElement = screen.getByText("Testimonials");
  expect(linkElement).toBeInTheDocument();
});
test('to check backend heading', () => {
  render(<Portfolio/>);
  const linkElement = screen.getByText(/Back-End/i);
  expect(linkElement).toBeInTheDocument();
});
test('to check frontend heading', () => {
  render(<Portfolio />);
  const linkElement = screen.getByText(/Front-End/i);
  expect(linkElement).toBeInTheDocument();
});
test('to check the name in Home Component', () => {
  render(<Home />);
  const linkElement = screen.getByText(/Frontend/);
  expect(linkElement).toBeInTheDocument();
});
test('to check the name', () => {
  render(<AboutMe />);
  const linkElement = screen.getByText("Sreeja");
  expect(linkElement).toBeInTheDocument();
});
test('to check the working of contact button',()=>{
  render(<Contact />);
  const linkElement = screen.getByRole('Contact')
  expect(screen.getAllByRole('button')).toBeEnabled()
});




