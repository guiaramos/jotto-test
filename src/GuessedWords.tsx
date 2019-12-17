import React from 'react';
import { IPropsGuessedWords } from './interfaces';

const GuessedWords: React.FC<IPropsGuessedWords> = ({ guessedWords }) => {
  return (
    <div data-test='component-guessed-words'>
      {!guessedWords.length && (
        <span data-test='guess-instructions'>
          Try to guess the secret word!
        </span>
      )}
      {guessedWords.length && (
        <div data-test='guessed-words'>
          <h3>Guessed Words</h3>
          <table>
            <thead>
              <tr>
                <th>Guess</th>
                <th>Matching Letters</th>
              </tr>
            </thead>
            <tbody>
              {guessedWords.map((word, index) => (
                <tr data-test='guessed-word' key={index}>
                  <td>{word.guessedWord}</td>
                  <td>{word.letterMatchCount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default GuessedWords;
