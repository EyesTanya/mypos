import React from 'react';
import { shallow } from 'enzyme';
import ReportPage from './ReportPage';

describe('ReportPage', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<ReportPage />);
    expect(wrapper).toMatchSnapshot();
  });
});
