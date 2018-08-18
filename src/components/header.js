import React from 'react';
// TODO switch links after eslint-disable-next-line to be more a11y complient

export default function Header(props) {
  return (
    // <!--Header -->
    <header>

      {/* <!-- Top Navigation --> */}
      <nav>
        <ul className="clearfix">
          {          
          // eslint-disable-next-line
          }<li><a className="what" href="#">What ?</a></li>
          {
          // eslint-disable-next-line
          }<li><a className="new" href="#">+ New Game</a></li>
        </ul>
      </nav>

      {/* <!-- Modal Information Box --> */}
      <div className="overlay" id="modal">
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
            {
            // eslint-disable-next-line
            }<a className="close" href="#">Got It!</a>
          </div>
        </div>
      </div>

      {/* <!-- logo text --> */}
      <h1>HOT or COLD</h1>

    </header>
  )
}