import React from 'react';
import { render, screen } from '@testing-library/react';
import CardGrid from './CardGrid';

describe('CardGrid Component', () => {
  it('renders CardGrid component with data', () => {
    const currentTableData = [
      // Provide an array of mock data that you expect to be rendered as cards.
      // Each item should have a unique key for the "key" prop.
    ];

    render(<CardGrid currentTableData={currentTableData} />);

    // Verify that the component renders correctly.
    const cardElements = screen.getAllByTestId('card');
    expect(cardElements).toHaveLength(currentTableData.length);

    // You can add more specific assertions to check if the cards are rendered correctly.
  });

  it('renders CardGrid component without data', () => {
    const currentTableData = [];

    render(<CardGrid currentTableData={currentTableData} />);

    // Verify that the component renders correctly when there's no data.
    const noDataElement = screen.getByText('No data available.');
    expect(noDataElement).toBeInTheDocument();

  });
});
