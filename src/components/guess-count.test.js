import React from 'react';
import { shallow, mount } from 'enzyme';

import {GuessCount} from './guess-count';

describe('<GuessCount />', () => {
  it('Should render without crashing', () => {
    shallow(<GuessCount />);
  });

  it('Should render the right count and guess noun', () => {
    const guessCount = [0,1,2];
    let wrapper = shallow(<GuessCount guessCount={guessCount[0]} />);
    expect(wrapper.contains(
    <h2 id="guessCount">
      You've made <span id="count">{guessCount[0]}</span> guesses!
    </h2>
    )).toEqual(true);

    wrapper = shallow(<GuessCount guessCount={guessCount[1]} />);
    expect(wrapper.contains(
    <h2 id="guessCount">
      You've made <span id="count">{guessCount[1]}</span> guess!
    </h2>
    )).toEqual(true);

    wrapper = shallow(<GuessCount guessCount={guessCount[2]} />);
    expect(wrapper.contains(
    <h2 id="guessCount">
      You've made <span id="count">{guessCount[2]}</span> guesses!
    </h2>
    )).toEqual(true);
  });
});