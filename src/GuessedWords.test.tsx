import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import GuessedWords from './GuessedWords';
import { IPropsGuessedWords } from './interfaces';
import { findByTestAttr } from './test/testUtils';

const defaultProps = {
  guessedWords: [{ guessedWord: 'train', letterMatchCount: 3 }]
};

/**
 * Factory function to create a ShallowWrapper for the GuessedWords component.
 * @function setup
 * @param {IPropsGuessedWords} props - Component props specific to this setup
 * @returns {ShallowWrapper}
 */
const setup = (props: IPropsGuessedWords) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<GuessedWords {...setupProps} />);
};

describe('if there are no words guessed', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = setup({ guessedWords: [] });
  });
  test('renders without error', () => {
    const component = findByTestAttr(wrapper, 'component-guessed-words');
    expect(component.length).toBe(1);
  });
  test('renders instructions to guess word', () => {
    const instructions = findByTestAttr(wrapper, 'guess-instructions');
    expect(instructions.text().length).not.toBe(0);
  });
});
describe('if there are words guessed', () => {});
