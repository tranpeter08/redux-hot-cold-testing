//import the action and the type
import { 
  GENERATE_AURAL_UPDATE, 
  generateAuralUpdate, 
  RESTART_GAME, 
  restartGame, 
  MAKE_GUESS, 
  makeGuess 
} from './actions';

//test for aciton type and payload
describe('generateAuralUpdate', () => {
  it('should return the action', () => {
    const action = generateAuralUpdate();
    expect(action.type).toEqual(GENERATE_AURAL_UPDATE);
  });
});

describe('restartGame', () => {
  it('Should return the action', () => {
    const correctAnswer = 45;
    const action = restartGame(correctAnswer);
    expect(action.type).toEqual(RESTART_GAME);
    expect(action.correctAnswer).toEqual(correctAnswer);
  });
});

describe('makeGuess', () => {
  it('Should return the action', () => {
    const guess = 23;
    const action = makeGuess(guess);
    expect(action.type).toEqual(MAKE_GUESS);
    expect(action.guess).toEqual(guess);
  });
});