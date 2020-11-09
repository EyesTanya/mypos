import React from 'react';
import { shallow } from 'enzyme';
import ShopPage from './ShopPage';

describe('ShopPage', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<ShopPage />);
    expect(wrapper).toMatchSnapshot();
  });
});
