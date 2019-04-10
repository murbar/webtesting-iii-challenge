import React from 'react';
import Display from './Display';
import { render } from 'react-testing-library';

describe('Display', () => {
  it('displays unlocked by default', () => {
    const { getByText } = render(<Display />);
    getByText('Unlocked');
  });

  it('displays open by default', () => {
    const { getByText } = render(<Display />);
    getByText('Open');
  });

  it('displays locked when locked', () => {
    const { getByText } = render(<Display locked={true} />);
    getByText('Locked');
  });

  it('displays unlocked when unlocked', () => {
    const { getByText } = render(<Display locked={false} />);
    getByText('Unlocked');
  });

  it('displays open when open', () => {
    const { getByText } = render(<Display closed={false} />);
    getByText('Open');
  });

  it('displays closed when closed', () => {
    const { getByText } = render(<Display closed={true} />);
    getByText('Closed');
  });
});
