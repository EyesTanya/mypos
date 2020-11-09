import React from 'react';
import { shallow } from 'enzyme';
import StockPage from './StockPage';

describe('StockPage', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<StockPage />);
    expect(wrapper).toMatchSnapshot();
  });
});
