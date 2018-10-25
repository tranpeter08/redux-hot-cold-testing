import React from 'react';
import {shallow, mount} from 'enzyme';

import {Feedback} from './feedback';

describe('<Feedback />', () => {
  it('should render without crashing', () => {
    shallow(<Feedback />);
  });

  it('Should render feedback text', () => {
    //guessCount feedback 
    const feedback = "You're hot!";
    const wrapper = shallow(<Feedback guessCount={1} feedback={feedback}  />);
    expect(wrapper.contains(
    <h2 
      id="feedback"
      role="status"
      aria-live="assertive"
      aria-atomic="true"
    >
      {feedback} <span className="visuallyhidden">Guess again!</span>
    </h2>))
    .toEqual(true);
  });
});