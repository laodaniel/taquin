import Board from '../src/board';
import path from 'path';
import {shallow} from 'enzyme';
import React from 'react';

describe(path.basename(__filename), function() {
  it('should render Taquin', function() {
    const wrapper = shallow(<Board />);
    expect(wrapper.find('section')).toHaveLength(1);
  });
});
