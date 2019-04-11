import React from 'react';
import Display from './Display';
import { render } from 'react-testing-library';
import 'jest-dom/extend-expect';

describe('Display', () => {
  describe('Locked/Unlocked indicator', () => {
    it('displays unlocked by default', () => {
      const { getByText } = render(<Display />);
      getByText('Unlocked');
    });

    it('displays locked when locked', () => {
      const { getByText } = render(<Display locked={true} />);
      getByText('Locked');
    });

    it('is styled red when locked', () => {
      const { getByText } = render(<Display locked={true} />);
      const display = getByText('Locked');
      expect(display).toHaveClass('red-led');
    });

    it('displays unlocked when unlocked', () => {
      const { getByText } = render(<Display locked={false} />);
      getByText('Unlocked');
    });

    it('is styled green when unlocked', () => {
      const { getByText } = render(<Display locked={false} />);
      const display = getByText('Unlocked');
      expect(display).toHaveClass('green-led');
    });
  });

  describe('Open/Closed indicator', () => {
    it('displays open by default', () => {
      const { getByText } = render(<Display />);
      getByText('Open');
    });
    it('displays open when open', () => {
      const { getByText } = render(<Display closed={false} />);
      getByText('Open');
    });

    it('is styled green when open', () => {
      const { getByText } = render(<Display closed={false} />);
      const display = getByText('Open');
      expect(display).toHaveClass('green-led');
    });

    it('displays closed when closed', () => {
      const { getByText } = render(<Display closed={true} />);
      getByText('Closed');
    });

    it('is styled red when closed', () => {
      const { getByText } = render(<Display closed={true} />);
      const display = getByText('Closed');
      expect(display).toHaveClass('red-led');
    });
  });
});
