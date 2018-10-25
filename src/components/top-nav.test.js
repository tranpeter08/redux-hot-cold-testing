import React from 'react';
import { shallow, mount } from 'enzyme';

import { TopNav } from './top-nav';
import { generateAuralUpdate, restartGame } from '../actions';

describe('<TopNav />', () => {
  it('Should render without failing', () => {
    shallow(<TopNav />);
  });

  it('Should dispatch action generateAuralUpdate', () => {
    const dispatch = jest.fn();
    const wrapper = shallow(<TopNav dispatch={dispatch} />);

    wrapper.find('a[href="#get-status"]').simulate('click');
    expect(dispatch).toHaveBeenCalledWith(generateAuralUpdate());
  });

  it('Should dispatch action restartGame', () => {
    const dispatch = jest.fn();
    const correctAnswer= 43;
    const wrapper = shallow(<TopNav dispatch={dispatch} />);

    wrapper.find('a[href="#feedback"]').simulate('click');
    expect(dispatch).toHaveBeenCalled();
  });
});