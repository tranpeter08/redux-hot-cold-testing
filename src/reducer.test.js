//import reducer and actions
import { gameReducer } from './reducer';
import { generateAuralUpdate, restartGame, makeGuess } from './actions';

describe('gameReducer', () => {
  //fake data
  const currentState1 = {
    guesses: [1,2,3,4],
    feedback: "You're cold.",
    auralStatus: '',
    correctAnswer: 99
  }

  const currentState2 = {
    guesses: [1],
    feedback: "You're cold.",
    auralStatus: '',
    correctAnswer: 99
  }

  const currentState3 = {
    guesses: [],
    feedback: "Make a guess!",
    auralStatus: '',
    correctAnswer: 99
  }

  it('Should set initial state if nothing is passed in', () => {
    const state = gameReducer(undefined, '');

    expect(state.guesses).toEqual([]);
    expect(state.feedback).toEqual('Make your guess!');
    expect(state.auralStatus).toEqual('');
    expect(state.correctAnswer).toBeGreaterThan(0);
    expect(state.correctAnswer).toBeLessThan(100);
  });

  it('Should set current state when unknown action is passed', () => {

    const state = gameReducer(currentState1, {type: 'Unknown'});
    expect(state).toEqual(currentState1);
  });

  describe('restartGame', () => {
    it('should restart the game and reset state', () => {
      let state;
      const correctAnswer = 50;
      state = gameReducer(state, restartGame(correctAnswer));
      expect(state).toEqual({
        guesses: [],
        feedback: 'Make your guess!',
        auralStatus: '',
        correctAnswer: correctAnswer
      });
    });
  });

  describe('generateAuralUpdate', () => {
    it('should generate the right aural status', () => {
      let state = gameReducer(currentState1, generateAuralUpdate());
      expect(state.auralStatus).toEqual(
        "Here's the status of the game right now: You're cold. You've made 4 guesses. In order of most- to least-recent, they are: 4, 3, 2, 1"
      );

      state = gameReducer(currentState2, generateAuralUpdate());
      expect(state.auralStatus).toEqual(
        "Here's the status of the game right now: You're cold. You've made 1 guess. It was: 1"
      );

      state = gameReducer(currentState3, generateAuralUpdate());
      expect(state.auralStatus).toEqual(
        "Here's the status of the game right now: Make a guess! You've made 0 guesses."
      );
    });
  });

  describe('makeGuess', () => {
    const guesses = ['a', 1, 70, 96, 99];

    let state; 
    it('Should give the right feedback for the guess', () => {
      state = gameReducer(currentState3, makeGuess(guesses[0]));
      expect(state.feedback).toEqual('Please enter a valid number.');

      state = gameReducer(currentState3, makeGuess(guesses[1]));
      expect(state.feedback).toEqual("You're Ice Cold...");

      state = gameReducer(currentState3, makeGuess(guesses[2]));
      expect(state.feedback).toEqual("You're Warm.");

      state = gameReducer(currentState3, makeGuess(guesses[3]));
      expect(state.feedback).toEqual("You're Hot!");

      state = gameReducer(currentState3, makeGuess(guesses[4]));
      expect(state.feedback).toEqual( "You got it!");
    }) 

    it('Should keep an array of guesses', () => {
      const guesses = [1,2,3,4];
      let state;

      state = gameReducer(state, makeGuess(guesses[0]));
      state = gameReducer(state, makeGuess(guesses[1]));
      state = gameReducer(state, makeGuess(guesses[2]));
      state = gameReducer(state, makeGuess(guesses[3]));

      expect(state.guesses).toHaveLength(4);
      expect(state.guesses).toEqual([1,2,3,4]);
    });
  });
});