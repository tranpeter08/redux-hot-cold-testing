import React from 'react';
import { shallow, mount } from 'enzyme';

import { GuessList } from './guess-list';

describe('<GuessList />', () => {
  const guesses = [1,2,3,4];
  const guessList = guesses.map( (guess, i) => (
     <li key={i}>
      {guess}
    </li>
  ));

  it('Should render without crashing', () => {
    shallow(<GuessList guesses={guesses}/>);
  });

  it('Should render list of guesses', () => {
    const wrapper = shallow(<GuessList guesses={guesses}/>);

    expect(wrapper.contains(
      <ul id="guessList" className="guessBox clearfix">
        {guessList}
      </ul>
    )).toEqual(true);
  });

});