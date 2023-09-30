import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import LandingPage from './LandingPage';

// Mock the useFetch custom hook.
jest.mock('../customHook/useFetch', () => jest.fn());

describe('LandingPage Component', () => {
  beforeEach(() => {
    // Mock data for testing.
    const mockData = {
      capsuleData: [
        // Define your mock data here.
      ],
    };

    // Mock the useFetch hook to return your mock data.
    require('../customHook/useFetch').default.mockReturnValue(mockData);
  });

  it('renders LandingPage component correctly with data', () => {
    const data = {
      capsuleData: [
        // Provide data that should trigger the first branch of your conditional rendering.
      ],
    };

    render(<LandingPage data={data} />);

    // Verify that your component renders correctly.
    const cardGridElement = screen.getByTestId('card-grid');
    const paginationElement = screen.getByTestId('pagination');
    
    expect(cardGridElement).toBeInTheDocument();
    expect(paginationElement).toBeInTheDocument();
  });

  it('renders LandingPage component correctly without data', () => {
    // Provide data that should trigger the second branch of your conditional rendering.
    const data = {};

    render(<LandingPage data={data} />);

    // Verify that your component renders correctly.
    const cardGridElement = screen.getByTestId('card-grid');
    const paginationElement = screen.getByTestId('pagination');
    
    expect(cardGridElement).toBeInTheDocument();
    expect(paginationElement).toBeInTheDocument();
  });

  it('handles page change correctly', () => {
    const data = {
      capsuleData: [
        // Provide data that should trigger the first branch of your conditional rendering.
      ],
    };

    render(<LandingPage data={data} />);

    // Simulate a page change event.
    const pageButton = screen.getByText('2'); 
    fireEvent.click(pageButton);

  });
});
