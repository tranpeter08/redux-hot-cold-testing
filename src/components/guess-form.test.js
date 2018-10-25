import React from 'react';
import { shallow, mount } from 'enzyme';

import { GuessForm } from './guess-form';
import {makeGuess} from '../actions';

describe('<GuessForm />',() => {
  it('Should render without crashing', () => {
    shallow(<GuessForm />);
  });
  //test: dispatch makeGuess(value),  stimulate submit, 
  it('Should dispatch addList action on submit', () => {
    const value = "10";
    const dispatch = jest.fn();
    const wrapper = mount(<GuessForm dispatch={dispatch} />);
    wrapper.find('input[type="number"]').instance().value = value;
    wrapper.simulate('submit');
    expect(dispatch).toHaveBeenCalledWith(makeGuess(value));
  });
});