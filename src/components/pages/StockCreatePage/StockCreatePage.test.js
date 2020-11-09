import React from 'react';
import { shallow } from 'enzyme';
import StockCreatePage from './StockCreatePage';

describe('StockCreatePage', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<StockCreatePage />);
    expect(wrapper).toMatchSnapshot();
  });
});
