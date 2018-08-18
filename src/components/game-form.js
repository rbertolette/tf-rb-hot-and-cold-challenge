import React from 'react';
// TODO switch links after eslint-disable-next-line to be more a11y complient

export default function GameForm(props) {
  return (
    <form onSubmit={e => e.preventDefault()}>
      <input type="text" name="userGuess" id="userGuess" class="text" maxlength="3" autocomplete="off" placeholder="Enter your Guess" required />
      <input type="submit" id="guessButton" class="button" name="submit" value="Guess" />
    </form>
  )
};
