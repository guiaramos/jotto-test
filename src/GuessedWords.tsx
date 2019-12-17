import React from 'react';
import { IPropsGuessedWords } from './interfaces';

const GuessedWords: React.FC<IPropsGuessedWords> = ({ guessedWords }) => {
  return (
    <div data-test='component-guessed-words'>
      {guessedWords && (
        <span data-test='guess-instructions'>
          Try to guess the secret word!
        </span>
      )}
    </div>
  );
};

export default GuessedWords;
