import React from 'react';
import {shallow, mount} from 'enzyme';

import Game from './game';

describe('<Game />', () => {
  it('should render without crashing', () => {
    shallow(<Game />)
  })
})