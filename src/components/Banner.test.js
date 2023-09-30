import React from 'react';
import { render } from '@testing-library/react';
import Banner from './Banner';

test('renders Banner component', () => {
  const { getByText } = render(<Banner />);
  
  // You can add more specific assertions here based on your component's content.
  const servicesElement = getByText('Services');
  const multimediaElement = getByText('Multimedia products');
  const getStartedButton = getByText('Get Started');
  
  expect(servicesElement).toBeInTheDocument();
  expect(multimediaElement).toBeInTheDocument();
  expect(getStartedButton).toBeInTheDocument();
});
