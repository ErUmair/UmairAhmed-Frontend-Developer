import React from 'react';
import { render, screen } from '@testing-library/react';
import CardGrid from './CardGrid';

// Mock the Card component since it's used within CardGrid.
jest.mock('./Card', () => {
  return function MockCard(props) {
    return (
      <div data-testid="mock-card">
        {/* You can customize the content and props for the mock Card here if needed. */}
      </div>
    );
  };
});

describe('CardGrid Component', () => {
  it('renders Card components when currentTableData has data', () => {
    const currentTableData = [
      { capsule_serial: '1', /* other properties */ },
      { capsule_serial: '2', /* other properties */ },
      // Add more data items as needed.
    ];

    render(<CardGrid currentTableData={currentTableData} />);

    // Verify that the component renders the expected number of Card components.
    const cardElements = screen.getAllByTestId('mock-card');
    expect(cardElements).toHaveLength(currentTableData.length);

    // You can add more specific assertions to check if the cards are rendered correctly.
  });

  it('renders no Card components when currentTableData is empty', () => {
    const currentTableData = []; // Empty data array.

    render(<CardGrid currentTableData={currentTableData} />);

    // Verify that the component doesn't render any Card components.
    const cardElements = screen.queryAllByTestId('mock-card');
    expect(cardElements).toHaveLength(0);

    // You can add more assertions specific to the "no data" scenario.
  });
});
