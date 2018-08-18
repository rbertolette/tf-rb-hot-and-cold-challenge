import React from 'react';
import Header from './header';

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      guesses: [],
      hint: 'Make your Guess!'
    }
  }

  /**
   * called when the guess button is pushed
   * @param {Event} e 
   */
  addGuess(e) {
    e.preventDefault();
    console.log(this.textInput.value.trim());
  }

  render() {
    return (
      <div>
        <Header />
        <section className="game">

          <h2 id="feedback">{this.state.hint}</h2>

          <form onSubmit={(e) => this.addGuess(e)}>
            <input
              // onChange={e => props.onChange(e.target.value)}
              type="text"
              className="text"
              maxLength="3"
              autoComplete="off"
              placeholder="Enter your Guess"
              ref={input => this.textInput = input}
              required
            />
            {/* <input type="text" name="userGuess" id="userGuess" class="text" maxlength="3" autocomplete="off" placeholder="Enter your Guess" required /> */}
            {/* <input type="submit" id="guessButton" class="button" name="submit" value="Guess" /> */}
            <button
              type="submit"
              id="guessButton"
              className="button"
              name="submit"
              value="Guess"
              // onClick={(e) => this.addGuess(e)}
            >
            Guess </button>
            {/* onClick={() => this.addGuess()} */}
            {/* Cancel
            </button> */}
          </form>

          <p>Guess #<span id="count">{this.state.guesses.length}</span>!</p>

          <ul id="guessList" className="guessBox clearfix">
            <li>50</li>
          </ul>

        </section>
      </div>
    );
  }
}