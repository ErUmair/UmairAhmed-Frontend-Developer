import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux'; // Assuming you are using Redux for dispatch
import configureStore from 'redux-mock-store'; // You may need to install this package
import Search from './Search';

const mockStore = configureStore([]);

describe('Search Component', () => {
  let store;

  beforeEach(() => {
    store = mockStore({}); // Create a mock Redux store
  });

  it('handles search button click correctly', async () => {
    render(
      <Provider store={store}>
        <Search />
      </Provider>
    );

    // Mock API response
    const mockData = [{ /* Your mock data here */ }];
    global.fetch = jest.fn().mockResolvedValue({
      json: () => Promise.resolve(mockData),
    });

    // Fill the search input and select an option
    const searchInput = screen.getByPlaceholderText('Search by');
    const selectElement = screen.getByRole('combobox');
    fireEvent.change(searchInput, { target: { value: 'example' } });
    fireEvent.change(selectElement, { target: { value: 'status' } });

    // Click the search button
    const searchButton = screen.getByText('Search');
    fireEvent.click(searchButton);

    // Wait for the API call to resolve
    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalledWith(
        'https://api.spacexdata.com/v3/capsules?status=example'
      );
    });

    // Verify that the Redux action is dispatched
    const actions = store.getActions();
    expect(actions).toEqual([{ type: 'FILTER_CAPSULE', payload: mockData }]);
  });
});
