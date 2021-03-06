import React from 'react';
import Header from './header';

export default class Game extends React.Component {

  constructor(props) {
    super(props);

    const min = 1;
    const max = 100;
    this.state = {
      guesses: [],
      hint: 'Make your Guess!',
      answerNumber: this.getRandomIntInclusive(min, max),
      lastGuess: -1000,
      min: min,
      max: max,
      isWon: false,
      showInstructions: false
    }
  }

  /**
   * Generate an integer within the range of min to max
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#Getting_a_random_integer_between_two_values_inclusive
   * @param {Integer} min lowest integer
   * @param {Integer} max highest integer
   * @returns Integer
   */
  getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
  }

  /**
   * called when the guess button is pushed
   * @param {Event} e 
   */
  addGuess(e) {
    // prevent submit from redrawing the page
    e.preventDefault();
    const myGuess = this.textInput.value.trim();

    this.textInput.value = '';

    // validate that it's a number between min & max
    let errMsg = false;
    switch (true) {
      // @see https://stackoverflow.com/a/175775/2788785
      case (!(myGuess.match(/^-{0,1}\d+$/))):
        errMsg = "Please enter only whole numbers.";
        break;

      case (parseInt(myGuess, 10) > this.state.max):
      case (parseInt(myGuess, 10) < this.state.min):
        errMsg = `Number must be between ${this.state.min} and ${this.state.max}.`;
        break;

      case (this.state.guesses.includes(myGuess)):
        errMsg = `You've already guessed ${myGuess}.`;
        break;

      default:
    }

    if (errMsg) {
      alert(errMsg);
      return false;
    }

    // calculate the how close the last guess and this guess are as positive integers
    const lastDif = Math.abs(this.state.answerNumber - this.state.lastGuess);
    const thisDif = Math.abs(this.state.answerNumber - myGuess);

    // string to hold the new hint
    let myHint;
    let isWon = false;
    switch (true) {
      case (thisDif === 0):
        myHint = 'You Win!';
        isWon = true;
        break;

      case (thisDif < lastDif):
        myHint = 'Getting warmer';
        break;

      case (thisDif > lastDif):
        myHint = 'Getting colder';
        break

      case (thisDif === lastDif):
        myHint = 'Neither colder (that\'s a big hint)'

      default:
        myHint = 'Unexpected Err'
    }

    this.setState({
      lastGuess: myGuess,
      guesses: [...this.state.guesses, myGuess],
      hint: myHint,
      isWon: isWon
    });
  }

  /**
   * callback for Header New Game Button
   */
  newGameBut() {
    this.setState({
      guesses: [],
      hint: 'Make your Guess!',
      answerNumber: this.getRandomIntInclusive(this.state.min, this.state.max),
      lastGuess: -1000,
      isWon: false
    });
  }

  /**
   * callback for Header What? button
   */
  whatBut() {
    this.setState({
      showInstructions: true
    });
  }

  /**
   * Callback for Header close button (on modal)
   * @param {Event} e 
   */
  closeInstructions(e) {
    e.preventDefault();
    this.setState({
      showInstructions: false
    });
  }

  render() {
    // create li elements for each guess
    const guesses = this.state.guesses.map((guess, index) =>
      <li key={index}>
        {guess}
      </li>
    );


    const headerProps = {
      newGameBut: (e) => this.newGameBut(e),
      whatBut: (e) => this.whatBut(e),
      showInstructions: this.state.showInstructions,
      closeBut: (e) => this.closeInstructions(e)
    }
    return (
      <div>
        {/* <Header newGameBut={(e) => this.newGameBut(e)} whatBut={(e) => this.whatBut(e)} /> */}
        <Header {...headerProps} />

        <section className="game">
          <h2 id="feedback">{this.state.hint}</h2>

          <form onSubmit={(e) => this.addGuess(e)}>
            <input
              disabled={this.state.isWon}
              type="text"
              className="text"
              maxLength="3"
              autoComplete="off"
              placeholder="Enter your Guess"
              ref={input => this.textInput = input}
              required
            />
            <button
              disabled={this.state.isWon}
              type="submit"
              id="guessButton"
              className="button"
              name="submit"
              value="Guess"
            >Guess</button>
          </form>

          <p>Guess #<span id="count">{this.state.guesses.length}</span>!</p>

          <ul id="guessList" className="guessBox clearfix">
            {guesses}
          </ul>

        </section>
      </div>
    );
  }
}