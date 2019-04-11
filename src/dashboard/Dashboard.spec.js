import React from 'react';
import Dashboard from './Dashboard';
import { render, fireEvent } from 'react-testing-library';
import 'jest-dom/extend-expect';

describe('Dashboard', () => {
  it('renders the controls', () => {
    const { getByText } = render(<Dashboard />);
    getByText('Close Gate');
  });

  it('renders the display', () => {
    const { getByText } = render(<Dashboard />);
    getByText('Unlocked');
  });

  it('should toggle gate button text when gate button is clicked', () => {
    const { getByText } = render(<Dashboard />);
    const closeButton = getByText('Close Gate');
    fireEvent.click(closeButton);
    expect(closeButton).toHaveTextContent('Open Gate');
    fireEvent.click(closeButton);
    expect(closeButton).toHaveTextContent('Close Gate');
  });

  it('should activate lock button when gate is close', () => {
    const { getByText } = render(<Dashboard />);
    const closeButton = getByText('Close Gate');
    const lockButton = getByText('Lock Gate');
    expect(lockButton).toBeDisabled();
    fireEvent.click(closeButton);
    expect(lockButton).toBeEnabled();
    fireEvent.click(closeButton);
    expect(lockButton).toBeDisabled();
  });

  it('toggles closed state when close button clicked', () => {
    const { getByText } = render(<Dashboard />);
    const closeButton = getByText('Close Gate');
    fireEvent.click(closeButton);
    expect(closeButton).toHaveTextContent('Open Gate');
    fireEvent.click(closeButton);
    expect(closeButton).toHaveTextContent('Close Gate');
  });

  it('should disable open button when lock button is clicked', () => {
    const { getByText } = render(<Dashboard />);
    const closeButton = getByText('Close Gate');
    const lockButton = getByText('Lock Gate');
    fireEvent.click(closeButton);
    fireEvent.click(lockButton);
    expect(closeButton).toBeDisabled();
  });
});
