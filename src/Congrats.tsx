import React from 'react';
import { IPropsCongrats } from './interfaces';

/**
 * Functional react component for congratulatory message.
 * @function
 * @return {JSX.Element} - Rendered component (or null if 'success' prop)
 */
const Congrats: React.FC<IPropsCongrats> = ({ success }) => {
  return (
    <div data-test='component-congrats'>
      {success && (
        <span data-test='congrats-message'>
          Congratulations! You guessed the word
        </span>
      )}
    </div>
  );
};

export default Congrats;
