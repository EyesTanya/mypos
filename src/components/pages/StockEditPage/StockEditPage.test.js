import React from 'react';
import { shallow } from 'enzyme';
import StockEditPage from './StockEditPage';

describe('StockEditPage', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<StockEditPage />);
    expect(wrapper).toMatchSnapshot();
  });
});
