import React from 'react';

export default function Header(props) {
  const modalStyle = {
    display: ((props.showInstructions) ? 'block' : 'none')
  }
  return (
    // <!--Header -->
    <header>

      {/* <!-- Top Navigation --> */}
      <nav>
        <ul className="clearfix">
          {
            // eslint-disable-next-line
          }<li><button className="what" onClick={props.whatBut}>What ?</button></li>
          <li><button className="new" onClick={props.newGameBut}>+ New Game</button></li>
        </ul>
      </nav>

      {/* <!-- Modal Information Box --> */}
      {/* <div className={this.props.modelClass} id="modal"> */}
      <div className="overlay" id="modal" style={modalStyle}>
        <div className="content">
          <h3>What do I do?</h3>
          <div>
            <p>This is a Hot or Cold Number Guessing Game. The game goes like this: </p>
            <ul>
              <li>1. I pick a <strong>random secret number</strong> between 1 to 100 and keep it hidden.</li>
              <li>2. You need to <strong>guess</strong> until you can find the hidden secret number.</li>
              <li>3. You will <strong>get feedback</strong> on how close ("hot") or far ("cold") your guess is.</li>
            </ul>
            <p>So, Are you ready?</p>
            <button className="close" onClick={props.closeBut}>Got It!</button>
          </div>
        </div>
      </div>

      {/* <!-- logo text --> */}
      <h1>HOT or COLD</h1>

    </header>
  )
}