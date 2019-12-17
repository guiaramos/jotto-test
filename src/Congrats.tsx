import React, { Fragment } from 'react';

/**
 * Functional react component for congratulatory message.
 * @function
 * @return {JSX.Element} - Rendered component (or null if 'success' prop)
 */
const Congrats: React.FC<{ success: boolean }> = ({ success }) => {
  return (
    <Fragment>
      <div data-test='component-congrats'>
        {success && (
          <span data-test='congrats-message'>
            Congratulations! You guessed the word
          </span>
        )}
      </div>
    </Fragment>
  );
};

export default Congrats;
